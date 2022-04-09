export class SendEmailInfo {
  to_email: string;
  lang: string;

  constructor(to_email: string, lang: string) {
    this.to_email = to_email;
    this.lang = lang;
  }
}
