class ListaNegociacoes{

  constructor(funcaoAtualiza){
    this._negociacoes = []
    this._atualiza = funcaoAtualiza;
  }

  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    this._atualiza("Negociação adicionada com sucesso.");
  }

  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  esvazia(){
    if(this._negociacoes.length == 0){
      this._atualiza("Não há negociações a serem apagadas.")
    }else{
      this._negociacoes = [];
      this._atualiza("Negociações apagadas com sucesso.");
    }
  }

}