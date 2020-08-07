$(document).ready(function () {
    const oldCpf = $('#Cpf').val();
    $('#Cpf').mask('000.000.000-00', { placeholder: "___.___.___-__" });

$('#frmBeneficiario').submit(function (e) {
    e.preventDefault();
    var cpf = $("#Cpf").val().replace('.', '').replace('.', '').replace('-', '');

    var urlVerifExistencia = "/Beneficiario/VerificaExistencia";

    if (!CpfValido(cpf)) {
        ModalDialog("Cpf inválido", "Cpf informado não é válido!");
        return;
    }

    if (oldCpf != cpf)
        VerificaExistencia($("#IdCliente").val(), cpf, urlVerifExistencia, AtualizaBeneficiario);
    else
        AtualizaBeneficiario();
    })
})

function AtualizaBeneficiario() {

    $.ajax({
        url: $("#frmBeneficiario").attr('action'),
        method: "POST",
        async: false,
        data: $('#frmBeneficiario').serialize(),
        error:
            function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
        success:
            function (result) {
                ModalDialog("Sucesso!", result)
                $('#modalBeneficiario').modal('toggle');
                $('#gridBeneficiarios').jtable('load', { idCliente: idCliente });

            }
    });
}

