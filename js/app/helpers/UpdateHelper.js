class UpdateHelper{

  static update(mensagem, self) {
    self._negociacoesView.update(self._listaNegociacoes);

    self._mensagemView.mensagem = mensagem;
    self._mensagemView.update(self._mensagemView);
  }

}