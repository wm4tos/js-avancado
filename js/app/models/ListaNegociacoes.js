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
    this._negociacoes = [];
    this._atualiza("Negociação apagada com sucesso.");
  }

}