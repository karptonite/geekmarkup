import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MarkupComponentFactoryResolverService } from '@geek/geekmarkup/markup-component-factory-resolver.service';

@Component({
  selector: 'gg-markup-content',
  template: '<ng-template #injectionContainer></ng-template>',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkupContentComponent implements OnInit {
  @Input() content: any;
  @ViewChild('injectionContainer', { read: ViewContainerRef })
  containerRef;

  constructor(private factory: MarkupComponentFactoryResolverService) {}

  private insertComponent(node) {
    // first get the component factory from the resolver
    const componentFactory = this.factory.getComponentFactory(node.nodeName);
    if (!componentFactory) {
      return;
    }

    // create the component
    const componentRef = componentFactory.create(
      this.containerRef.parentInjector,
    );
    if (!componentRef) {
      return;
    }

    // Set the content of the component BEFORE we insert it into the parent,
    // to make sure it is available OnInit
    (componentRef.instance as any).content = node;

    // Insert the new component into the container
    this.containerRef.insert(componentRef.hostView);
  }

  ngOnInit() {
    let node = this.content.firstChild;

    while (node) {
      this.insertComponent(node);
      node = node.nextSibling;
    }
  }
}
