import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tournoiinterne';


  arrPlayers: String[] = ['coco', 'nico', 'laurent', 'Alex', 'Random Names',
    'Carl Mendez',
    'Rabia Ward',
    'Keelan Lowe',
    'Stefano Higgs',
    'Rohan Prosser',
    'Fahima Hodson',
    'Sabrina Kim',
    'Tre Molina',
    'Asiyah Tyler',
    'Arslan Mcgill',
    'Lubna Pitts',
    'Byron Chandler',
    'Osian Alvarez',
    'Dave Schultz',
    'Aleyna Bennett',
    'Charlize Hobbs',
    'Natan Neal',
    'Warwick Blackmore',
    'Aidan Lott',
    'Aaran Davidson',
    'Jibril Haigh',
    'Raife Barnard',
    'Makayla Samuels',
    'Ahyan Noble',
    'Rick Padilla',
    'Mahdi Stubbs',
    'Donte Copeland',
    'Diya Jordan',
    'Aisling Hensley',
    'Logan Herrera',
    'Nafisa Ritter',
    'Kenzie Randolph',
  ]
  inputPlayer: String = "";

  matches: any[] = []

  addPlayer() {
    if (this.inputPlayer) {
      this.arrPlayers.push(this.inputPlayer);
      this.inputPlayer = ""
    }
  }

  deletePlayer(index: number) {
    this.arrPlayers.splice(index, 1)
  }

  generateMatch() {
    let courts = []
    let players = this.arrPlayers.concat();
    for (let i = 0; i < 7 && players.length / 4 >= 1; i++) {
      let p0 = this.popRandom(players)
      let p1 = this.popRandom(players)
      let p2 = this.popRandom(players)
      let p3 = this.popRandom(players)
      courts.push({ 'name': 'terrain ' + (i + 1), p0, p1, p2, p3 })
    }
    courts.push({ 'name': "Repos", players })
    console.log(courts)
    this.matches.push(courts)
  }

  popRandom(array: any[]) {
    let i = (Math.random() * array.length) | 0
    return array.splice(i, 1)[0]
  }

}
