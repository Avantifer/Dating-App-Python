import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/models/quotes';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss'],
})
export class SafetyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tipsSafety: Quote[] = [
    new Quote(
      'Never Send Money or Share Financial Information',
      "Never send money, especially over wire transfer, even if the person claims to be in an emergency. Wiring money is like sending cash — it's nearly impossible to reverse the transaction or trace where the money went. Never share information that could be used to access your financial accounts. If another user asks you for money, report it to us immediately."
    ),
    new Quote(
      'Protect Your Personal Information',
      "Never share personal information, such as your social security number, home or work address, or details about your daily routine (e.g., that you go to a certain gym every Monday) with people you don't know. If you are a parent, limit the information that you share about your children on your profile and in early communications. Avoid sharing details such as your children's names, where they go to school, or their ages or genders."
    ),
    new Quote(
      'Stay on the Platform',
      "Keep conversations on the Secret Love platform while you're getting to know someone. Because exchanges on Secret Love are subject to our Safe Message Filters, users with bad intentions often try to move the conversation to text, messaging apps, email, or phone right away."
    ),
    new Quote(
      'Be Wary of Long Distance and Overseas Relationships',
      "Watch out for scammers who claim to be from your country but stuck somewhere else, especially if they ask for financial help to return home. Be wary of anyone who will not meet in person or talk on a phone/video call—they may not be who they say they are. If someone is avoiding your questions or pushing for a serious relationship without meeting or getting to know you first — that's a red flag."
    ),
    new Quote(
      'Protect Your Account',
      'Be sure to pick a strong password, and always be careful when logging into your account from a public or shared computer. Secret Love will never send you an email asking for your username and password information — if you receive an email asking for account information, report it immediately.'
    ),
  ];

  tipsMeeting: Quote[] = [
    new Quote(
      "Don't Be In A Rush",
      "Take your time and get to know the other person before agreeing to meet or chat off Secret Love. Don't be afraid to ask questions to screen for any red flags or personal dealbreakers. A phone or video call can be a useful screening tool before meeting."
    ),
    new Quote(
      'Meet in Public and Stay in Public',
      "Meet for the first few times in a populated, public place — never at your home, your date's home, or any other private location. If your date pressures you to go to a private location, end the date."
    ),
    new Quote(
      'Tell Friends and Family About Your Plans',
      "Tell a friend or family member of your plans, including when and where you're going. Have your cell phone charged and with you at all times."
    ),
    new Quote(
      'Be in Control of Your Transportation',
      "We want you to be in control of how you get to and from your date so that you can leave whenever you want. If you're driving yourself, it's a good idea to have a backup plan such as a ride-share app or a friend to pick you up."
    ),
    new Quote(
      'Know Your Limits',
      "Be aware of the effects of drugs or alcohol on you specifically — they can impair your judgment and your alertness. If your date tries to pressure you to use drugs or drink more than you're comfortable with, hold your ground and end the date."
    ),
    new Quote(
      "Don't Leave Drinks or Personal Items Unattended",
      'Know where your drink comes from and know where it is at all times — only accept drinks poured or served directly from the bartender or server. Many substances that are slipped into drinks to facilitate sexual assault are odorless, colorless, and tasteless. Also, keep your phone, purse, wallet, and anything containing personal information on you at all times.'
    ),
    new Quote(
      'If You Feel Uncomfortable, Leave',
      "It's okay to end the date early if you're feeling uncomfortable. In fact, it's encouraged. And if your instincts are telling you something is off or you feel unsafe, ask the bartender or server for help."
    ),
  ];
}
