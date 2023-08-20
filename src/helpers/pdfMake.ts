import PdfMake from 'pdfmake';
import fs from 'fs';
import path from "path";

export const makePdf = ({
                          invoiceDate = new Date().toLocaleDateString(),
                          invoiceNumber = '',
                          buyerName = '',
                          buyerAddress = '',
                          clinic = '',
                          doctor = '',
                          price = ''
                        }) => {
  const fonts = {
    Roboto: {
      normal: path.resolve('./src/helpers/fonts/RobotoRegular.ttf'),
      bold: path.resolve('./src/helpers/fonts/RobotoMedium.ttf'),
      italics: path.resolve('./src/helpers/fonts/RobotoItalic.ttf'),
      bolditalics: path.resolve('./src/helpers/fonts/RobotoMediumItalic.ttf')
    }
  };

  const printer = new PdfMake(fonts);

// json with invoice layout
  const docDefinition = {
    content: [
      {
        fontSize: 11,
        table: {
          widths: ['50%', '50%'],
          body: [
            [{
              text: 'Status: Unpaid',
              border: [false, false, false, true],
              margin: [-5, 0, 0, 10]
            }, {
              text: 'Invoice# ' + invoiceNumber,
              alignment: 'right',
              border: [false, false, false, true],
              margin: [0, 0, 0, 10]
            }]
          ]
        }
      },
      {
        layout: 'noBorders',
        fontSize: 11,
        bold: true,
        table: {
          widths: ['50%', '50%'],
          body: [
            [{text: 'CliniClick', margin: [0, 10, 0, 0]}, {
              text: 'Invoice date: ' + invoiceDate,
              alignment: 'right',
              margin: [0, 10, 0, 0]
            }],
            ['Akshai Kumbalathparambil Thambi', 'Amrutha Palakkada Jayan'],
            ['Aruna Rani', 'Harpreet Singh'],
            ['Jimit Sunil Modi', '']
          ]
        }
      },
      {
        fontSize: 11,
        bold: true,
        table: {
          widths: ['50%', '50%'],
          body: [
            [{
              text: ' ',
              border: [false, false, false, true],
              margin: [0, 0, 0, 10]
            }, {
              text: 'Payment amount: $56.50',
              alignment: 'right',
              border: [false, false, false, true],
              margin: [0, 0, 0, 10]
            }]
          ]
        }
      },
      {
        layout: 'noBorders',
        fontSize: 11,
        table: {
          widths: ['100%'],
          body: [
            [{text: 'User account for payment:', margin: [0, 10, 0, 0]}],
            [buyerName],
            [buyerAddress],
            ['Payment link:'],
            [{
              text: 'http://localhost:41004/invoice',
              margin: [0, 0, 0, 10],
              fontSize: 10
            }]
          ]
        }
      },
      {
        fontSize: 11,
        table: {
          widths: ['5%', '46%', '23%', '13%', '13%'],
          body: [
            [
              {text: 'Pos', border: [false, true, false, true]},
              {text: 'Clinic', border: [false, true, false, true]},
              {text: 'Doctor', border: [false, true, false, true]},
              {text: 'Price', border: [false, true, false, true]},
              {text: 'Total', border: [false, true, false, true]}],
            [
              {text: '1', border: [false, true, false, true]},
              {text: clinic, border: [false, true, false, true]},
              {text: doctor || 'No preference', border: [false, true, false, true]},
              {text: '$50', border: [false, true, false, true]},
              {text: "$50", border: [false, true, false, true]}]
          ]
        }
      },
      {
        layout: 'noBorders',
        fontSize: 11,
        margin: [0, 0, 5, 0],
        table: {
          widths: ['88%', '12%'],
          body: [
            [{text: 'Subtotal:', alignment: 'right', margin: [0, 5, 0, 0]}, {
              text: '$50',
              margin: [0, 5, 0, 0]
            }],
            [{text: 'Tax: $6.5', alignment: 'right'}, '$0.00'],

          ]
        }
      },
      {
        fontSize: 11,
        bold: true,
        table: {
          widths: ['88%', '12%'],
          body: [
            [{
              text: 'Total:',
              alignment: 'right',
              border: [false, false, false, true],
              margin: [0, 0, 0, 10]
            }, {text: '$56.5', border: [false, false, false, true], margin: [0, 0, 0, 10]}]
          ]
        }
      },
      {
        layout: 'noBorders',
        fontSize: 11,
        alignment: 'center',
        table: {
          widths: ['100%'],
          body: [
            [{text: 'Wire transfer info:', margin: [0, 10, 0, 0]}],
            [' '],
            ['Company name: CliniClick'],
            ['Company address: 22 Some St, Brantford Ontario N3S 6Y6']
          ]
        }
      }
    ]
  };
  const options = {};

  const filePath = path.resolve('invoices_pdf/' + invoiceNumber + '.pdf');

// create invoice and save it to invoices_pdf folder
  const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream(filePath));
  pdfDoc.end();
};