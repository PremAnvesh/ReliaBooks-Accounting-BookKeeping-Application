import { Component, Inject, OnInit , ElementRef, ViewChild  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})

export class InvoicePageComponent implements OnInit {
  @ViewChild('invoiceComp',{static:false}) ele!: ElementRef
  email = localStorage.getItem('email') || 'email';
  userDetails = localStorage.getItem("user");
  userName = localStorage.getItem("name");
  userOccupation = localStorage.getItem("occupation");
  invNumber = invRand();
  actualAmount : number = 0;
  taxes : number = 0;
  constructor(private dialogRef: MatDialogRef<InvoicePageComponent>,
    @Inject(MAT_DIALOG_DATA) public retrievedData: any,
  ) {
    this.taxes = -retrievedData.cgst - retrievedData.sgst - retrievedData.igst;
    console.log(this.taxes);
    this.actualAmount = retrievedData.amount + this.taxes; 
  }

  ngOnInit(): void {
    
  }

  generatePDF(){
  html2canvas(this.ele.nativeElement).then((canvas)=>{
    const imgData=canvas.toDataURL('image/jpeg')
    const pdf= new jsPDF({
      orientation:'portrait'
    })
    const imageProps=pdf.getImageProperties(imgData);
    const pdfw=pdf.internal.pageSize.getWidth();
    const pdfh=(imageProps.height*pdfw)/imageProps.width;
    pdf.addImage(imgData,'PNG',0,0,pdfw,pdfh);
    pdf.save("invoice.pdf");
  })
  }
}
function invRand() {
  var result = '';
  var characters = '123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return parseInt(result);
}


