import { Component, OnInit } from '@angular/core';
import {Education, Experience, Resume} from "../resume";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
declare var require: any
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  resume = new Resume();

  constructor(private router: Router,public datepipe: DatePipe) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.resume=JSON.parse(sessionStorage.getItem('resume') || '{}');
  }


  previousPage() {
    this.router.navigate(['/steps/education']);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
  }


  generatePdf(action = 'open') {
    console.log(this.resume.languages[0].level);
    //this.currentDate();
    console.log(pdfMake);
    //const documentDefinition = this.getDocumentDefinition();
    const documentDefinition = this.ex();

    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }

  }


  resetForm() {
    this.resume = new Resume();
  }


  ex() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            height:[30,'*'],
            body: [
              [ [{
                text: this.resume.name,
                bold: true,
                fontSize: 20,
                alignment: 'left',
                margin: [0, 0, 0, 20],
              },
                {
                  text: this.resume.position,
                  bold: true,
                  fontSize: 15,
                  alignment: 'left',
                  margin: [0, 0, 0, 20],
                }],
                [this.getProfilePicObject()]
              ],
            ]
          }
        },

        {
          text: this.resume.address,
          alignment: 'center'
        },

        {
          style: 'tableExample',
          table: {
            heights: [100],
            widths:[165,415],
            body: [
              [
                { border:[false,false,false,false], fillColor:'#eeeeee', rowSpan: 2,
                  columns: [
                    [{

                      text: 'Contact',
                      fontSize: 16,
                      bold: true
                    },

                      {
                        text: [{text: 'Email: ', bold: true} , this.resume.email],
                      },
                      {
                        text: [{text: 'Phone Nr: ', bold: true} ,this.resume.contactNo],
                      },
                      {
                        text: [{text: 'Linkedln: ', bold: true, color:'black'} , this.resume.socialProfile],
                        link: this.resume.socialProfile,
                        color: 'blue',
                      },
                      {
                        text: '\nSoft Skills',
                        fontSize: 16,
                        bold: true
                      },
                      {
                        columns : [
                          {
                            ul : [
                              ...this.resume.skillsS.filter((value, index) => index % 2 === 0).map(s => s.value)
                            ]
                          },
                          {
                            ul : [
                              ...this.resume.skillsS.filter((value, index) => index % 2 === 1).map(s => s.value)
                            ]
                          },

                        ]
                      },

                      {
                        text: '\nHard Skills',
                        fontSize: 16,
                        bold: true
                      },
                      {
                        columns : [
                          {
                            ul : [
                              ...this.resume.skillsH.filter((value, index) => index % 2 === 0).map(s => s.value)
                            ]
                          },
                          {
                            ul : [
                              ...this.resume.skillsH.filter((value, index) => index % 2 === 1).map(s => s.value)
                            ]
                          },
                        ]
                      },
                      {
                        text: '\nLanguages',
                        fontSize: 16,
                        bold: true
                      },
                      {
                        columns : [
                          {
                            ul : [
                              ...this.resume.languages.filter((value, index) => index % 1 === 0 ).map(s => s.value+" - "+ JSON.stringify(s.value).slice(10, -2))
                            ]
                          }
                        ]
                      },
                      {
                        text: '\nCertifications',
                        fontSize: 16,
                        bold: true
                      },
                      {
                        columns : [
                          {
                            ul : [
                              ...this.resume.certifications.filter((value, index) => index % 3 === 0).map(s => s.value)
                            ]
                          }
                        ]
                      }

                    ]
                  ]
                },
                {border:[false,false,false,false], fillColor:'#eeeeff',
                  columns: [
                    [{
                      text: 'Experience',
                      fontSize: 16,
                      bold: true
                    },
                      this.getExperienceObject(this.resume.experiences),
                      {
                        text: '\nEducation',
                        fontSize: 16,
                        bold: true
                      },

                      this.getEdObject(this.resume.educations),

                    ]
                  ]
                }
              ]
            ]
          }
        }

      ],

      name: {
        fontSize: 16,
        bold: true
      },
      jobTitle: {
        fontSize: 14,
        bold: true,
        italics: true
      },
      sign: {
        margin: [0, 50, 0, 10],
        alignment: 'right',
        italics: true
      },
      tableHeader: {
        bold: true,
      },
      pageMargins: [ 0, 0, 0, 20 ]

    }
  }

  getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    return {
      content: [
        {
          text: this.resume.name,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: this.resume.position,
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: this.resume.address
        },
        {
          columns: [
            [{
              text: 'Contact',
              style: 'name'
            },

              {
                text: 'Email : ' + this.resume.email,
              },
              {
                text: 'Contant No : ' + this.resume.contactNo,
              },
              {
                text: 'GitHub: ' + this.resume.socialProfile,
                link: this.resume.socialProfile,
                color: 'blue',
              }
            ],
            [
              this.getProfilePicObject()
            ]
          ]
        },
        {
          text: 'Soft Skills',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.resume.skillsS.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skillsS.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skillsS.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },

        {
          text: 'Hard Skills',
          style: 'header'
        },
        {
          columns : [
            {
              ul : [
                ...this.resume.skillsH.filter((value, index) => index % 3 === 0).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skillsH.filter((value, index) => index % 3 === 1).map(s => s.value)
              ]
            },
            {
              ul : [
                ...this.resume.skillsH.filter((value, index) => index % 3 === 2).map(s => s.value)
              ]
            }
          ]
        },
        {
          text: 'Experience',
          style: 'header'
        },
        this.getExperienceObject(this.resume.experiences),

        {
          text: 'Education',
          style: 'header'
        },
        this.getEducationObject(this.resume.educations),
        {
          text: 'Other Details',
          style: 'header'
        },
        {
          text: this.resume.otherDetails
        },
        {
          text: 'Signature',
          style: 'sign'
        },
        {
          columns : [
            { qr: this.resume.name + ', Contact No : ' + this.resume.contactNo, fit : 100 },
            {
              text: `(${this.resume.name})`,
              alignment: 'right',
            }
          ]
        }
      ],
      info: {
        title: this.resume.name + '_RESUME',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },
      /*background: {
        image:"../assets/resources/bckg.png",
        width:3508,
        height:2480,
        opacity: 0.5,
        absolutePosition: { x: 150, y: 250 },
      },*/
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italics: true
        },
        tableHeader: {
          bold: true,
        }
      }
    };
  }

  getExperienceObject(experiences: Experience[]) {

    const exs: {border:[boolean,boolean,boolean,boolean],columns: (({ text: string; style: string; bold?:boolean; } | { text: string; style?: undefined;italics?:boolean;color?:boolean; })[] | { text: string; alignment: string,bold?: boolean; })[]; }[][] = [];

    experiences.forEach(experience => {
      exs.push(
        [{ border:[false,true,false,false],
          columns: [
            [{
              text: experience.jobTitle,
              style: 'jobTitle',
              bold:true
            },
              {
                text: experience.employer,
                italics:true
              },
              {
                text: experience.jobDescription,
              }],
            {
              text: experience.startDate + ' ---- ' + experience.endDate,
              alignment: 'right',
              bold: true

            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEdObject(educations: Education[]) {

    const exs: {border:[boolean,boolean,boolean,boolean],columns: (({ text: string; style: string; bold?:boolean; } | { text: string; style?: undefined;italics?:boolean;color?:boolean; })[] | { text: string; alignment: string,bold?: boolean; })[]; }[][] = [];

    educations.forEach(ed => {
      exs.push(
        [{ border:[false,true,false,false],
          columns: [
            [{
              text: ed.college,
              bold:true
            },
              {
                text: ed.degree,
                italics:true
              },
              {
                text: ed.city,
              }],
            {
              text: ed.startDate + ' --- ' + ed.endDate,
              alignment: 'right',
              bold: true

            }
          ]
        }]
      );
    });

    return {
      table: {
        widths: ['*'],
        body: [
          ...exs
        ]
      }
    };
  }

  getEducationObject(educations: Education[]) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'Degree',
            style: 'tableHeader'
          },
            {
              text: 'College',
              style: 'tableHeader'
            },
            {
              text: 'Passing Year',
              style: 'tableHeader'
            },
            {
              text: 'Result',
              style: 'tableHeader'
            },
          ],
          ...educations.map(ed => {
            return [ed.degree, ed.college, ed.city];
          })
        ]
      }
    };
  }


  getProfilePicObject() {
    if (this.resume.profilePic) {
      return {
        image: this.resume.profilePic ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

  currentDate() {

   /* this.resume.experiences.forEach(experience => {
      console.log(experience.startDate);
      console.log(experience.endDate);

      if (experience.current)
        experience.endDate = "present";
      else {
        let ed = experience.endDate;
        experience.endDate = this.datepipe.transform(ed, 'MM/yyyy');
      }

      let sd = experience.startDate;
      experience.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });

    this.resume.educations.forEach(education => {
      console.log(education.startDate);
      console.log(education.endDate);
      if (education.current)
        education.endDate = "present";
      else {
        let ed = education.endDate;
        education.endDate = this.datepipe.transform(ed, 'MM/yyyy');
      }

      let sd = education.startDate;
      education.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });*/



    this.resume.experiences.forEach(experience => {

      const datePipeSD = new DatePipe('en-US');
      let ed = experience.endDate;
      experience.endDate = datePipeSD.transform(ed, 'MM/yyyy');


      let sd = experience.startDate;
      experience.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });


    this.resume.educations.forEach(edu => {

      const datePipeSD = new DatePipe('en-US');
      let ed = edu.endDate;
      edu.endDate = datePipeSD.transform(ed, 'MM/yyyy');


      let sd = edu.startDate;
      edu.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });
  }


  }
