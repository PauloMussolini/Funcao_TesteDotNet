
$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        const cpf = $(this).find("#Cpf").val().replace('.', '').replace('.', '').replace('-', '');

        if (!CpfValido(cpf)) {
            ModalDialog("Cpf inválido", "Cpf informado não é válido!");
            return;
        }
        VerificaExistencia(cpf, urlVerifExistencia, cadastraCliente);
    })
    $('#Cpf').mask('000.000.000-00', { placeholder: "___.___.___-__" });
    $('#CEP').mask('000.00-000', { placeholder: "___.__-___" });
})

function cadastraCliente() {

    $.ajax({
        url: urlPost,
        method: "POST",
        async: false,
        data: {
            "NOME": $("#Nome").val(),
            "CEP": $("#CEP").val(),
            "Email": $("#Email").val(),
            "Sobrenome": $("#Sobrenome").val(),
            "Nacionalidade": $("#Nacionalidade").val(),
            "Estado": $("#Estado").val(),
            "Cidade": $("#Cidade").val(),
            "Logradouro": $("#Logradouro").val(),
            "Telefone": $("#Telefone").val(),
            "Cpf": $("#Cpf").val().replace('.', '').replace('.', '').replace('-', '')
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
                ModalDialog("Sucesso!", r)
                $("#formCadastro")[0].reset();
                window.location.href = urlRetorno;
            }
    });
}
