class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($("#ListaNegociacoes"));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagemView = new MensagemView($("#mensagemView"));
  }

  apaga(){
    if(this._listaNegociacoes.negociacoes.length == 0){
      UpdateHelper.update("Não existem negociações a serem apagadas.", this);
    }else{
      this._listaNegociacoes.esvazia();
      UpdateHelper.update("Negociações apagadas com sucesso.", this)
    }
  }
  
  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._listaNegociacoes.adiciona(negociacao);
    UpdateHelper.update("Negociação adicionada com sucesso.", this);

    this._limpaFormulario();

  }

  _criaNegociacao(){
    return new Negociacao(new Date(DateHelper.textoParaData(this._inputData.value)), this._inputQuantidade.value,this._inputValor.value);
  }

  _limpaFormulario(){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0;

    this._inputData.focus();
  }

}