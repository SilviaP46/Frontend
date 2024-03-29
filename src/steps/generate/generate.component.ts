import {Component, OnInit} from '@angular/core';
import {Details, Education, Experience, Resume} from "../resume";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";

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
  position: string = "";
  selectedTheme: string = "";
  themePurple = ['#3d366b', '#eeeeee', '#eeeeff']
  themeBlue = ['#2b6ea1', '#eeeeee', '#eeeeff']
  themeGreen = ['#455073', '#C0904D', '#eeeeff']
  themeMaroon = ['#5b0e2d', '#eeeeee', '#bfae8f']

  constructor(private router: Router, public datepipe: DatePipe, private confirmationService: ConfirmationService, private messageService: MessageService) {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.resume = JSON.parse(sessionStorage.getItem('resume') || '{}');
    this.selectedTheme = 'Purple';
  }


  previousPage() {
    this.router.navigate(['/steps/education']);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
  }

  prepare() {
    this.currentDate()

    if (this.selectedTheme == 'Purple')
      this.resume.theme = this.themePurple;

    if (this.selectedTheme == 'Blue')
      this.resume.theme = this.themeBlue;

    if (this.selectedTheme == 'Brown')
      this.resume.theme = this.themeGreen;

    if (this.selectedTheme == 'Maroon')
      this.resume.theme = this.themeMaroon;


  }


  generatePdf(action = 'open') {
    this.prepare()
    console.log(JSON.stringify(this.resume.languages[0].level).slice(10,-2))

    //const documentDefinition = this.getDocumentDefinition();
    const documentDefinition = this.ex();

    switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;

      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }

  }


  resetForm() {
    this.resume = new Resume();
  }


  ex() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    console.log(this.resume.theme[0])
    return {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: [500, 80],
            heights: 80,
            body: [
              [
                {
                  border: [false, false, false, false],
                  fillColor: this.resume.theme[0],
                  columns: [
                    [
                      [{
                        text: this.resume.name,
                        bold: true,
                        fontSize: 20,
                        alignment: 'left', color: 'white',
                        margin: [5, 7, 0, 0],
                      },
                        {
                          text: this.resume.position,
                          bold: false,
                          fontSize: 15,
                          alignment: 'left',
                          color: 'white',
                          margin: [5, 2, 0, 0],
                        }

                      ],

                    ]

                  ]

                },

                {
                  border: [false, false, false, false],
                  fillColor: this.resume.theme[0],
                  columns: [[this.getProfilePicObject()]]

                },
              ]
            ]
          }
        },

        {
          table: {
            widths: [182, 400],
            heights: 750,
            body: [
              [
                {
                  border: [false, false, false, false], fillColor: this.resume.theme[1],
                  columns: [
                    [
                      {

                        text: 'Contact',
                        fontSize: 16,
                        bold: true, margin: [5, 2, 0, 0],
                      },

                      {
                        text: [{text: 'Email:\n', bold: true}, this.resume.email],
                        margin: [5, 1, 0, 0],
                      },
                      {
                        text: [{text: 'Phone Nr:\n', bold: true}, this.resume.contactNo],
                        margin: [5, 1, 0, 0],
                      },
                      {
                        text: [{
                          text: 'Linkedln:\n',
                          bold: true,
                          color: 'black',
                          fontSize: 12
                        }, this.resume.socialProfile],
                        link: this.resume.socialProfile,
                        color: 'blue',
                        fontSize: 10,
                        margin: [5, 1, 0, 0],
                      },
                      {
                        text: '\nSoft Skills',
                        fontSize: 16,
                        bold: true,
                        margin: [5, 1, 0, 0],
                      },
                      {
                        columns: [
                          {
                            ul: [
                              ...this.resume.skillsS.filter((value, index) => index % 2 === 0).map(s => s.value)
                            ]
                          },
                          {
                            ul: [
                              ...this.resume.skillsS.filter((value, index) => index % 2 === 1).map(s => s.value)
                            ]
                          },

                        ]
                        ,
                        margin: [5, 1, 0, 0],
                      },

                      {
                        text: '\nHard Skills',
                        fontSize: 16,
                        bold: true, margin: [5, 1, 0, 0]
                      },
                      {
                        columns: [
                          {
                            ul: [
                              ...this.resume.skillsH.filter((value, index) => index % 2 === 0).map(s => s.value)
                            ]
                          },
                          {
                            ul: [
                              ...this.resume.skillsH.filter((value, index) => index % 2 === 1).map(s => s.value)
                            ]
                          },
                        ], margin: [5, 1, 0, 0],
                      },
                      {
                        text: '\nLanguages',
                        fontSize: 16,
                        bold: true, margin: [5, 1, 0, 0]
                      },
                      {
                        columns: [
                          {
                            ul: [
                              ...this.resume.languages.filter((value, index) => index % 1 === 0).map(s => s.value + " - " + JSON.stringify(s.level).slice(10,-2))
                            ]
                          }
                        ], margin: [5, 1, 0, 0],
                      },
                      {
                        text: '\nCertifications',
                        fontSize: 16,
                        bold: true, margin: [5, 1, 0, 0],
                      },
                      {
                        columns: [
                          {
                            ul: [
                              ...this.resume.certifications.filter((value, index) => index % 1 === 0).map(s => s.value)
                            ]
                          }
                        ], margin: [5, 1, 0, 0],
                      },
                      {
                        text: "\n"
                      },
                      {
                        columns: [
                          {
                            qr: this.resume.name + ', Contact No : ' + this.resume.contactNo,
                            fit: 100,
                            margin: [5, 2, 0, 1],
                          },

                        ]
                      }
                    ]
                  ]
                },
                {
                  border: [false, false, false, false], fillColor: this.resume.theme[2],
                  columns: [
                    [
                      {
                        text: this.resume.address,
                        alignment: 'left',
                        margin: [5, 2, 5, 0]
                      },
                      {
                        text: '\nExperience',
                        fontSize: 16,
                        bold: true, margin: [5, 2, 0, 0]
                      },
                      this.getExperienceObject(this.resume.experiences),
                      {
                        text: '\nEducation',
                        fontSize: 16,
                        bold: true, margin: [5, 2, 0, 0]
                      },

                      this.getEdObject(this.resume.educations),
                      this.getDetailsObject(this.resume.otherDetails)


                    ]
                  ], margin: [5, 2, 5, 0]
                }
              ]
            ]
          }
        }

      ],
      styles: {
        tableExample: {
          /*heights:900,
          widths:[182,400]*/
        }
      },

      pageMargins: [0, 0, 0, 0],
      info: {
        title: this.resume.name + '_RESUME',
        author: this.resume.name,
        subject: 'RESUME',
        keywords: 'RESUME, ONLINE RESUME',
      },

    }
  }


  getExperienceObject(experiences: Experience[]) {

    const exs: { border: [boolean, boolean, boolean, boolean], columns: (({ text: string; style: string; bold?: boolean; } | { text: string; style?: undefined; italics?: boolean; color?: boolean; })[] | { text: string; alignment: string, bold?: boolean; })[]; }[][] = [];

    experiences.forEach(experience => {
      exs.push(
        [{
          border: [false, true, false, false],
          columns: [
            [{
              text: experience.jobTitle,
              style: 'jobTitle',
              bold: true
            },
              {
                text: experience.employer,
                italics: true
              },
              {
                text: experience.jobDescription,
              }],
            {
              text: experience.startDate + ' --- ' + experience.endDate,
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

    const exs: { border: [boolean, boolean, boolean, boolean], columns: (({ text: string; style: string; bold?: boolean; } | { text: string; style?: undefined; italics?: boolean; color?: boolean; })[] | { text: string; alignment: string, bold?: boolean; })[]; }[][] = [];

    educations.forEach(ed => {
      exs.push(
        [{
          border: [false, true, false, false],
          columns: [
            [{
              text: ed.college + ', ' + ed.city,
              bold: true
            },
              {
                text: JSON.stringify(ed.degree).slice(10,-2),
                italics: true
              },
              {
                text: ed.specialization,
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

  getDetailsObject(details: Details[]) {

    const exs: { border: [boolean, boolean, boolean, boolean], columns: (({ text: string; style: string; bold?: boolean; fontSize: number; margin: number[] } | { text: string; style?: undefined; italics?: boolean; color?: boolean; })[] | { text: string; alignment: string, bold?: boolean; })[]; }[][] = [];

    details.forEach(d => {
      exs.push(
        [{
          border: [false, false, false, false],
          columns: [
            [{
              text: JSON.stringify(d.type).slice(10,-2),
              bold: true,
              fontSize: 16,
              margin: [5, 2, 0, 0]
            },
              {
                text: '\n' + d.value,
              },
            ],
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
        image: this.resume.profilePic,
        width: 75,
        alignment: 'right',
        margin: [5, 3 , 10 , 3]
      };
    }
    return null;
  }

  currentDate() {

    this.resume.experiences.forEach(experience => {

      if (experience.current)
        experience.endDate = "present";
      else {
        const datePipeSD = new DatePipe('en-US');
        let ed = experience.endDate;
        if (ed != null && ed.length > 7)
          experience.endDate = datePipeSD.transform(ed, 'MM/yyyy');
      }

      let sd = experience.startDate;
      if (sd != null && sd.length > 7)
        experience.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });


    this.resume.educations.forEach(edu => {

      if (edu.current)
        edu.endDate = "present";
      else {
        const datePipeSD = new DatePipe('en-US');
        let ed = edu.endDate;
        if (ed != null && ed.length > 7)
          edu.endDate = datePipeSD.transform(ed, 'MM/yyyy');
      }


      let sd = edu.startDate;
      if (sd != null && sd.length > 7)
        edu.startDate = this.datepipe.transform(sd, 'MM/yyyy');
    });
  }

  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
      message: 'Do you want to clear all data from this resume?',
      header: 'Are you sure?',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'Resume data cleared'});
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT: {
            this.messageService.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected'});
            this.resetForm();
            break;
          }
          case ConfirmEventType.CANCEL:
            this.messageService.add({severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled'});
            break;
        }
      },
      key: "positionDialog"
    });
  }


}
