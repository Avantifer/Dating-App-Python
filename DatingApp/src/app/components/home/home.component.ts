import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Card } from 'src/app/shared/models/card';
import { Characteristic } from 'src/app/shared/models/characteristic';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Quote } from 'src/app/shared/models/quotes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.putQuotes();
  }

  characteristics: Characteristic[] = [
    new Characteristic(
      '../../../assets/icons/star-icon.png',
      'Find the most committed singles.'
    ),
    new Characteristic(
      '../../../assets/icons/config-icon.png',
      'Detailed profiles, search by criteria and geolocation.'
    ),
    new Characteristic(
      '../../../assets/icons/mobile-phone-icon.png',
      'Secret always accompanies you so you can see him wherever you want.'
    ),
    new Characteristic(
      '../../../assets/icons/user-icon.png',
      'The most serious dating service.'
    ),
  ];

  cards: Card[] = [
    new Card(
      'person_outline',
      '../../../assets/img/card1_img.webp',
      'Tell who you are!',
      [
        'Talk about you. The secret? Naturalness, sincerity and spontaneity. A few lines are enough to make a good impression. Why not add a touch of humour, too?',
        'Accuracy: The more criteria you complete, the more opportunities to be contacted by people with the same interests and lifestyle.',
      ]
    ),
    new Card(
      'tune',
      '../../../assets/img/card2_img.webp',
      'Find the person you are looking for!',
      [
        'Find the person who is really right for you thanks to the detailed search.',
        'Discover our personalized selection of detailed profiles.',
        'Share your photos. Create an album that reflects your personality.',
      ]
    ),
    new Card(
      'chat_bubble_outline',
      '../../../assets/img/card3_img.webp',
      'Contact',
      [
        "Don't know how to start a conversation?",
        'A good way to break the ice is to talk about the details that attracted you to their profile or things that you have in common.',
        'Or share a link to a song or GIF. Stand out!',
        'Read our tips on how to make your profile attractive and how to break the ice.',
      ]
    ),
  ];

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider!: KeenSliderInstance;

  quotes: Quote[] = [
    new Quote(
      'Magdalena y Annie',
      'I had just broken up and Annie was starting to date women, so we were both really nervous and took it really easy at first. But we fell madly in love very quickly and we knew that it would be forever.'
    ),
    new Quote(
      'Gabriel y Maria',
      'I met my fiancée on Secret Love during the COVID-19 quarantine. She is from London, United Kingdom, and I am from Albacete, Spain. We are Christians and we fall madly in love.'
    ),
    new Quote(
      'Kenneth y Elliot',
      "To be honest, I'd been on a lot of Secret Love dates and I was convinced it would be just another hottie I could hang out with and eat for free. After 3 years and many shared dates and adventures… I am married to my Secret Love guy, Kenny!"
    ),
    new Quote(
      'Rebeca',
      'She came in with one of the WORST pick up lines ever, but I was bored at work so I decided to reply. From that moment we did not stop talking, dating and falling in love more and more.'
    ),
    new Quote(
      'Fernando',
      "I have a message for the single people of the world, especially for introverts like us: don't be afraid to step out of your comfort zone. When you do, you will truly connect. Secret Love has brought us together and I will always be grateful for that. ❤"
    ),
    new Quote(
      'Elisa',
      "With my roommate from uni, we stayed up late connected to Secret Love. We weren't looking for anything serious (and we didn't want to flirt either, really, we just had fun). My current husband and I matched on Secret Love."
    ),
  ];

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.putQuotes();
  }

  putQuotes() {
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement,
      {
        loop: true,
        rtl: true,
        breakpoints: {
          '(max-width : 750px)': {
            slides: {
              perView: 1,
            },
          },
          '(min-width : 750px) and (max-width : 970px)': {
            slides: {
              perView: 2,
              spacing: 50,
            },
          },
          '(min-width : 971px)': {
            slides: {
              perView: 3,
              spacing: 15,
            },
          },
        },
      },
      [
        (slider: any) => {
          let timeout: any;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.prev();
            }, 3000);
          }
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        },
      ]
    );
  }
}
