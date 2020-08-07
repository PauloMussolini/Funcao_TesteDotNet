
$(document).ready(function () {
    if (obj) {
        $('#formCadastro #Nome').val(obj.Nome);
        $('#formCadastro #CEP').val(obj.CEP);
        $('#formCadastro #Email').val(obj.Email);
        $('#formCadastro #Sobrenome').val(obj.Sobrenome);
        $('#formCadastro #Nacionalidade').val(obj.Nacionalidade);
        $('#formCadastro #Estado').val(obj.Estado);
        $('#formCadastro #Cidade').val(obj.Cidade);
        $('#formCadastro #Logradouro').val(obj.Logradouro);
        $('#formCadastro #Telefone').val(obj.Telefone);
        $('#formCadastro #Cpf').val(obj.Cpf);
    }
    $('#Cpf').mask('000.000.000-00', { placeholder: "___.___.___-__" });
    $('#CEP').mask('000.00-000', { placeholder: "___.__-___" });
    const oldCpf = obj.Cpf;

    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        const cpf = $(this).find("#Cpf").val().replace('.', '').replace('.','').replace('-', '');
        if (!CpfValido(cpf)) {
            ModalDialog("Cpf inválido", "Cpf informado não é válido!");
            return;
        }
        if (oldCpf != cpf)
            VerificaExistencia(cpf, urlVerifExistencia, alteraCliente);
        else
            alteraCliente();

    })
    
})

function alteraCliente() {
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
