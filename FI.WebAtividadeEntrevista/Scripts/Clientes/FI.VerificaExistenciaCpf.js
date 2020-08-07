function VerificaExistencia(idCliente, cpf, url, callback) {
    $.ajax({
        url: url,
        method: "POST",
        async: false,
        data: {
            "idCliente": idCliente,
            "cpf": cpf
        },
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (r) {
                if (r.Result) {
                        ModalDialog("Cpf Inválido", "Cpf informado já está cadastrado!");
                }
                else
                    callback();
            }
    })
}

