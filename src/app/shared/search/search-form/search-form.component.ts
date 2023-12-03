import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    this.emmitSearch.emit(value);
  }

}
