import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/shared/models/quotes';

@Component({
  selector: 'app-privacity',
  templateUrl: './privacity.component.html',
  styleUrls: ['./privacity.component.scss'],
})
export class PrivacityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  privacity: Quote[] = [
    new Quote(
      'Where This Privacy Policy Applies',
      "This Privacy Policy applies to websites, apps, events and other services we operate under the Secret Love brand. For simplicity, we refer to all of these as our 'services' in this Privacy Policy. To make it extra clear, we've added links to this Privacy Policy on all applicable services. Some services may require their own unique privacy policy. If a service has its own privacy policy, then that policy -- not this Privacy Policy -- applies."
    ),
    new Quote(
      'Cookies and Other Similar Data Collection Technologies',
      "We use and may allow others to use cookies and similar technologies (e.g., web beacons, pixels, SDKs) to recognize you and/or your device(s). You may read our Cookie Policy for more information on why we use them and how you can better control their use. Some web browsers (including Safari, Internet Explorer, Firefox and Chrome) have a “Do Not Track” (“DNT”) feature that tells a website that a user does not want to have his or her online activity tracked. If a website that responds to a DNT signal receives a DNT signal, the browser can block that website from collecting certain information about the browser's user. Not all browsers offer a DNT option and DNT signals are not yet uniform. For this reason, many businesses, including Secret Love, do not currently respond to DNT signals."
    ),
    new Quote(
      'How We Share Information',
      "Since our goal is to help you make meaningful connections, the main sharing of members' information is, of course, with other members. We also share some members' information with service providers and partners who assist us in operating the services, with other Match Group companies for specified reasons as laid out below and, in some cases, legal authorities."
    ),
    new Quote(
      'Cross-Border Data Transfers',
      "Sharing of information laid out in How We Share Information involves cross-border data transfers to the United States of America and other jurisdictions that may have different laws about data processing. When we transfer personal information outside of the EEA, the United Kingdom, Switzerland or other countries which data protection laws have been deemed adequate by the European Commission or other competent governmental body, we use standard contract clauses (standard contractual clauses are commitments between companies transferring personal data, binding them to protect the privacy and security of your data) or other appropriate transfer mechanism. We are currently in the process of reviewing transfers to our vendors and associated legal basis further to the recent Court of Justice for the European Union's ruling on transfers of personal data to the USA."
    ),
    new Quote(
      'Your rights',
      'For your protection and the protection of all of our members, we may ask you to provide proof of identity before we can answer the above requests. Keep in mind, we may reject requests, including if we are unable to authenticate you, if the request is unlawful or invalid, or if it may infringe on trade secrets or intellectual property or the privacy or other rights of someone else. If you wish to receive information relating to another member, such as a copy of any messages you received from them through our service, the other member will have to contact us to provide their written consent before the information is released. We may also ask them to provide proof of identity before we can answer the request. Also, we may not be able to accommodate certain requests to object to or restrict the processing of personal information, notably where such requests would not allow us to provide our service to you anymore. For instance, we cannot provide our service if we do not have your date of birth and thus cannot ensure that you are 18 years of age or older. In certain countries, including in the European Economic Area and the United Kingdom, you have a right to lodge a complaint with the appropriate data protection authority if you have concerns about how we process your personal information.'
    ),
    new Quote(
      "Children's Privacy",
      'Our services are restricted to individuals who are 18 years of age or older. We do not permit individuals under the age of 18 on our platform. If you suspect that a member is under the age of 18, please use the reporting mechanism available on the service.'
    ),
    new Quote(
      'Privacy Policy Changes',
      "Because we're always looking for new and innovative ways to help you build meaningful connections and strive on making sure explanations about our data practices remain up-to-date, this policy may change over time. We will notify you before any material changes take effect so that you have time to review the changes."
    ),
  ];
}
