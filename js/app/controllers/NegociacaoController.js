class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._listaNegociacoes = new ListaNegociacoes((mensagem) => {
      this._negociacoesView.update(this._listaNegociacoes);
  
      this._mensagemView.defineMensagem = mensagem;
      this._mensagemView.update(this._mensagemView);
    });

    this._negociacoesView = new NegociacoesView($("#ListaNegociacoes"));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagemView = new MensagemView($("#mensagemView"));
  }

  apaga(){
    this._listaNegociacoes.esvazia();
  }
  
  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();

    this._listaNegociacoes.adiciona(negociacao);

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