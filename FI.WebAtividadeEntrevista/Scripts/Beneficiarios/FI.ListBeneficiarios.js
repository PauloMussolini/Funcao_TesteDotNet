
$(document).ready(function () {

    if (document.getElementById("gridBeneficiarios"))
        $('#gridBeneficiarios').jtable({
            title: 'Beneficiários',
            selecting: true, // Linha selecionável
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlBeneficiarioList,
            },
            fields: {
                Nome: {
                    title: 'Nome Beneficiário',
                    width: '50%'
                },
                Cpf: {
                    title: 'Cpf',
                    width: '15%',
                    display: function (data) {
                        return '<strong>' + data.record.Cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") + '</strong>';
                    }
                },
                Alterar: {
                    title: '',
                    width: '5%',
                    display: function (data) {
                        return '<button onclick="alteraBeneficiario(\'' + data.record.Id + '\')" class="btn btn-primary btn-sm">Alterar</button>';
                    }
                },
                Excluir: {
                    title: '',
                    width: '5%',
                    display: function (data) {
                        return '<button onclick="confirmaExclusaoBeneficiario(\'' + data.record.Id + '\')" class="btn btn-danger btn-sm">Excluir</button>';
                    }
                }
            }
        });

    if (document.getElementById("gridBeneficiarios"))
        $('#gridBeneficiarios').jtable('load', { idCliente: 0});
})

function alteraBeneficiario(id) {
    $("#modalBeneficiario").load("Beneficiario/Alterar?id=" + id, function () {
        $("#modalBeneficiario").modal();
    })
}

function confirmaExclusaoBeneficiario(id) {
    ModalConfirm(id, "Exclusão de Beneficiário", "Confirma exclusão do beneficiário?");
}

function ExcluiBeneficiario(id) {
    $.ajax({
        url: 'Beneficiario/Excluir',
        data: { id: id },
            method: "POST",
            async: false,
            dataType: 'json',
            cache: false,
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
                    $('#gridBeneficiarios').jtable('load', { idCliente: idCliente });

                }
        });

}