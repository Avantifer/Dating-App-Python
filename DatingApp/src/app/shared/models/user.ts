export class User {
  user_id: string;
  tel: string;
  email: string;
  name: string;
  password: string;
  birthday: string;
  gender: string;
  interest: string;
  city: string;
  region: string;
  country: string;
  rol: string;

  constructor(
    user_id: string,
    tel: string,
    email: string,
    name: string,
    password: string,
    birthday: string,
    gender: string,
    interest: string,
    city: string,
    region: string,
    country: string,
    rol: string
  ) {
    this.user_id = user_id;
    this.tel = tel;
    this.email = email;
    this.name = name;
    this.password = password;
    this.birthday = birthday;
    this.gender = gender;
    this.interest = interest;
    this.city = city;
    this.region = region;
    this.country = country;
    this.rol = rol;
  }
}
