var idCliente = 0;
var nmTitular = '';

$(document).ready(function () {

    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable({
            title: 'Clientes',
            selecting: true, // Linha selecionável
            paging: true, //Enable paging
            pageSize: 5, //Set page size (default: 10)
            sorting: true, //Enable sorting
            defaultSorting: 'Nome ASC', //Set default sorting
            actions: {
                listAction: urlClienteList,
            },
            fields: {
                Id: {
                    key: true,
                    title: 'Id',
                    visibility: "hidden"
                },
                Nome: {
                    title: 'Nome',
                    width: '35%'
                },
                Cpf: {
                    title: 'Cpf',
                    width: '15%',
                    display: function (data) {
                        return '<strong>' + data.record.Cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") + '</strong>';
                    }
                },
                Email: {
                    title: 'Email',
                    width: '35%'
                },
                Alterar: {
                    title: '',
                    display: function (data) {
                        return '<button onclick="window.location.href=\'' + urlAlteracao + '/' + data.record.Id + '\'" class="btn btn-primary btn-sm">Alterar</button>';
                    }
                }
            },
            recordsLoaded: function (event, data) {
            //    var selectedRows = data.serverResponse.selected_ids.map(function (id) {
               //     return $('#gridClientes').jtable('getRowByKey', id)[0];
             ////   });
             //   $('#gridClientes').jtable('selectRows', $('#gridClientes').jtable('getRowByKey', Id)[32]);
            
                $('.jtable-data-row').click(function (data) {
                    var record = $(this).data('record');
                    idCliente = record.Id;
                    nmTitular = record.Nome;
                    $("#btnIncluiBenef").removeClass('btn-disabled').addClass('btn-primary')
                    $('#gridBeneficiarios').jtable('load', { idCliente: idCliente })
                });
            }
        });

    if (document.getElementById("gridClientes"))
        $('#gridClientes').jtable('load');



})

$(function () {
    $("#btnIncluiBenef").click(function () {

        $("#modalBeneficiario").load("Beneficiario/Incluir?idCliente=" + idCliente, function () {
            $("#modalBeneficiario").modal();
        })
    });
})