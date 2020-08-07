function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

function ModalForm(titulo) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                              ' +  
        '       < form id = "formBeneficiario" method = "post">                                                            ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                   <div class="row">                                                                               ' +
        '                        <div class="col-md-6">                                                                     ' +
        '                            <div class="form-group">                                                               ' +
        '                                <label for="Cpf">Cpf:</label>                                                      ' +
        '                                <input required="required" type="text" class="form-control" id="Cpf" name="Cpf" placeholder="Ex.: 999.999.999-99" maxlength="11">' +
        '                            </div>                                                                                     ' +
        '                        </div>                                                                                 ' +
        '                        <div class="col-md-6">                                                                     ' +
        '                            <div class="form-group">                                                               ' +
        '                                <label for="Nome">Nome:</label>                                                    ' +
        '                                <input required="required" type="text" class="form-control" id="Nome" name="Nome" placeholder="Ex.: João" maxlength="50">' +
        '                            </div>                                                                                 ' +
        '                        </div>                                                                                     ' +
        '          </div>                                                                                                   ' +
        '          <div class="modal-footer">                                                                               ' +
        '            <button type = "button" class="btn btn-default btn-success" onClick="AtualizaBeneficiario()"> Salvar</button >                         ' +
        '            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>                     ' +
        '                                                                                                                   ' +
        '          </div>                                                                                                   ' +
        '            </div>                                                                                                 ' +
        '  </div>                                                                                                           ' +
        ' </form>                                                                                                           ' +
        '</div>                                                                                                             ';

    $('body').append(texto);
    $('#Cpf').mask('000.000.000-00', { placeholder: "___.___.___-__" });
    $('#' + random).modal('show');
}

function ModalConfirm(id,titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                                ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick="ExcluiBeneficiario(' + id + ')">Confirmar</button>' +
        '                    <button type="button" class="btn btn-dangr" data-dismiss="modal">Fechar</button>               ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

