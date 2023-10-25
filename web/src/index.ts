/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

// import { faker } from "@faker-js/faker";
// import { Company } from "./Company";
// import { User } from "./User";
// console.log(faker.person.firstName())

const user = new User();
// console.log("**********")
// console.log(user)

const company = new Company();
// console.log("--------");
// console.log(company)
const map = new CustomMap("map");
map.addMarker(user);
map.addMarker(company);
