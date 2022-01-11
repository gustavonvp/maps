// import { User } from './User';
// import { Company } from './company';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);

import { Company } from "./company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();

const company = new Company();

const maps =  new CustomMap('map');

maps.addUserMarker(user);

maps.addCompanyMarker(company);
