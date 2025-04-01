import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public useAnimatedTitle: boolean = false;

  private animationInterval: any = null;

  constructor(private title: Title) {}

  setTitle(newTitle: string, speed: number = 200) {
    if (this.useAnimatedTitle) {
      this.animateTitle(newTitle, speed);
    } else {
      this.title.setTitle(newTitle);
    }
  }

  getTitle(): string {
    return this.title.getTitle();
  }

  animateTitle(title: string, speed: number = 200) {
    if (!title) return;

    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    let i = 0;
    this.animationInterval = setInterval(() => {
      if (i < title.length) {
        this.title.setTitle(title.slice(0, ++i));
      } else {
        clearInterval(this.animationInterval);
        this.animationInterval = null;
      }
    }, speed);
  }

  resetTitle(defaultTitle: string = 'My App') {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
    this.title.setTitle(defaultTitle);
  }
}
