import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'gg-markup',
  template:
    '<gg-markup-content #markupContent [content]=" rootNode"></gg-markup-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkupComponent implements OnInit, AfterViewChecked {
  @Input() markup: string; // this will be an xml string
  public rootNode: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    // FIXME we probably should pass in a DOMParser as a dependency,
    // allowing us to use a different parser server side if we switch to universal
    const parser: any = new DOMParser();
    const doc = parser.parseFromString(this.markup, 'application/xml');
    this.rootNode = doc.firstChild;
  }

  /**
   * Becuase of the way the markup content component inserts
   * additional components, then assigns their inputs, change detection is not
   * called on those components. Here, we call change detection once on the
   * whole markup block after the view is fully populated
   */
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
}
