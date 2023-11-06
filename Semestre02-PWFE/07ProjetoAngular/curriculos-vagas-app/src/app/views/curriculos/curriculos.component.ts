// Importa os módulos e classes necessárias
import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/model/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';
@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css'],
})
export class CurriculosComponent implements OnInit {
  public curriculos: Curriculo[] = []; // Uma matriz para armazenar as vagas
  constructor(private _curriculosService: CurriculoService) { }
  // Injeta o serviço de vagas no construtor do componente
  ngOnInit(): void {
    this.listarCurriculo();
    // Executa a função de listagem de Curriculo quando é inicializado
  }
  // Função para listar as Curriculo
  listarCurriculo() {
    this._curriculosService.getCurriculos().subscribe((retornaVaga) => {
      this.curriculos = retornaVaga.map((item) => {
        // Mapeia os dados retornados para o modelo Vaga
        return new Curriculo(
          item.id,
          item.nome,
          item.sobrenome,
          item.email,
          item.telefone,
          item.endereco,
          item.formacaoAcademica,
          item.experienciaProfissional,
          item.habilidades,
          item.idiomas,
          item.certificacoes
        );
      });
    });
  }
}