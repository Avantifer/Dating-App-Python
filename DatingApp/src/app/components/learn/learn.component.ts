import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/models/quotes';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rightQuotes: Quote[] = [
    new Quote(
      'Roll With Us Anywhere',
      "When you want to meet local people whether you're visiting New York City or Chicago, there's an app for that—and it's called Secret Love. Chat with people near and far with features that let you match around the world. Secret Love is your go-to travel buddy. We've got you covered in 190 countries, and not even our friends at OKCupid and Plenty of Fish can say that."
    ),
    new Quote(
      'Date Safer With Face to Face',
      "We're all eager to meet new people IRL, but dating during COVID-19 means putting your safety first. When six feet apart isn't enough, Face to Face lets you video chat with your match so you can keep the connection going online."
    ),
    new Quote(
      'Connect With People Everywhere',
      'Go beyond your distance settings and chat with people around the world with our Passport feature. All it takes is an upgrade to a Secret Love Plus subscription to be able to match anywhere from everywhere.'
    ),
    new Quote(
      'Matches at Your Fingertips',
      "One of the most adult decisions you'll make is picking a dating app that can offer you all the things your ex couldn't. And it's not just as simple as choosing between Badoo or Zoosk. Meeting people online is a journey, and you want someone along for the ride that you can trust. When it comes to making a match, consider the Secret Love app your new copilot."
    ),
    new Quote(
      'All-Inclusive, All the Time',
      "We're not a fan of labels, so we offer a dating experience designed to connect you with new people outside your usual circles. Unlike sites like Bumble, Secret Love doesn't filter based on height, education, race, or religion because demographics do not define a person. We believe everyone deserves the right to be seen and make the first move no matter how they identify. On our app, we put everyone in front of you and let you choose who you want to chat with."
    ),
  ];

  topLeftQuotes: Quote[] = [
    new Quote(
      'Explore Your Passions',
      "It's easy to chat up a match when you know you have something in common. The Secret Love app lets you add Passions to your profile and connect with people who share your interests."
    ),
  ];

  midLeftQuotes: Quote[] = [
    new Quote(
      'See Who Likes You',
      'There are only so many hours in a day for dating. We get it. A Secret Love Mega subscription lets you see all the people who Like you, saving you precious time so you can focus on the finer things in life.'
    ),
    new Quote(
      'Make Every Like Count',
      'Exclusive to Secret Love Ultra subscribers, Priority Likes puts your profile in front of the people you Like faster.'
    ),
  ];

  botLeftQuotes: Quote[] = [
    new Quote(
      'Endless Possibilities',
      "With more than 55 billion matches to date, we're no stranger to bringing singles together online. Some sites, like Hinge and eharmony, are designed for long-term relationships, but on the Secret Love app, we're all about the experience and offer possibilities for whatever it is you're looking for."
    ),
  ];
}
