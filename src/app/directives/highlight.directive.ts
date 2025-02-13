import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() searchTerm: string = ''; // The text to highlight
  @Input() fullText: string = ''; // The full text content

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.highlightText();
  }

  private highlightText() {
    if (!this.searchTerm) {
      this.el.nativeElement.innerHTML = this.fullText; // Reset text
      return;
    }

    const regex = new RegExp(`(${this.escapeRegExp(this.searchTerm)})`, 'gi');
    const highlightedText = this.fullText.replace(regex, '<mark>$1</mark>');

    this.el.nativeElement.innerHTML = highlightedText;
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // Escape special chars
  }

}
