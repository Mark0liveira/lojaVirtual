import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  produtos: Array<any>;

  constructor(private produtoService: ProdutosService ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.produtoService.listar().subscribe(dados => this.produtos = dados);
  }

}
