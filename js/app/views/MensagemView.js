class MensagemView extends View{

  template(model){return `<p class="alert alert-info"> ${model.mensagem}</p>`}

  get mensagem(){
    return this._mensagem;
  }

  set defineMensagem(mensagem){
    this._mensagem = mensagem;
  }

}