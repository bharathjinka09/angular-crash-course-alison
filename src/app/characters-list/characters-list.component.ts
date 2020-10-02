import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharactersService) {}

  getCharacters() {
    this.characterService
      .getCharacters()
      .then((characters) => (this.characters = characters));
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
