export class Resume {
  position:string="";
  profilePic: string="";
  name: string="";
  address: string="";
  contactNo: number;
  email: string="";
  socialProfile: string="";
  experiences: Experience[] = [];
  educations: Education[] = [];
  otherDetails: Details[] = [];
  skillsS: SoftSkill[] = [];
  skillsH: HardSkill[] = [];
  languages: Languages[] = [];
  certifications: Certifications[] = [];
  theme:Theme;


  constructor() {
    this.experiences.push(new Experience());
    this.educations.push(new Education());
    this.skillsS.push(new SoftSkill());
    this.skillsH.push(new HardSkill());
    this.otherDetails.push(new Details());
  }
}

export class Experience {
  employer: string="";
  jobTitle: string="";
  jobDescription: string="";
  startDate: string | null;
  endDate: string | null;
  current:boolean=false;
}

export class Education {
  degree: string="";
  college: string="";
  startDate:string | null;
  endDate: string | null;
  specialization:string="";
  city: string="";
  current:boolean=false
}

export class SoftSkill {
  value: string="";
}

export class HardSkill {
  value: string="";
}

export class Languages {
  value: string="";
  level: string="";
}

export class Certifications {
  value: string="";
}

export class Details {
  value: string="";
  type: string="";
}

export class Theme {
  c1: string="";
  c2: string="";
  c3: string="";
}
