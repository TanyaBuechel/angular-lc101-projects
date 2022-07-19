import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Awesome Pictures';
  image1 = 'https://imageio.forbes.com/specials-images/imageserve/62d26b610a00ec80dc9139f3/The-Southern-Ring-Nebula--as-captured-by-the-James-Webb-Space-Telescope--JWST--/960x0.jpg?format=jpg&width=960';
  image2 = 'https://i.guim.co.uk/img/media/60f8262ffcf0949c3c439cbc1ff26e30ac5cdc36/0_0_4537_4630/master/4537.jpg?width=1020&quality=85&fit=max&s=c8abb0b5a371966a683846afec8bb5d7';
  image3 = 'http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png';

  constructor() { }

  ngOnInit() {
  }

}