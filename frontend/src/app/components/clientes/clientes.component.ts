import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {
  dataReceive: string;
  constructor(private clientService: ClienteService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.clientService.getData()
      .subscribe(res => {
        console.log("Entra frontend");
        console.log(res);
        this.dataReceive = res.toString();

      });
  }

  postData(form: NgForm){
    console.log("Entra frontend post");
    this.clientService.postData(form.value)
    .subscribe(res => {
      console.log(res);
      M.toast({html: 'Cliente guardado'});
    });
  }

}
