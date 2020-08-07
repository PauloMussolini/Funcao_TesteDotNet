﻿/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Inclusão de coluna CPF
	Feature: 
*/
CREATE PROC FI_SP_ConsBeneficiario
	@ID BIGINT
AS
BEGIN
	IF(ISNULL(@ID,0) = 0)
		SELECT NOME, ID, CPF, IDCLIENTE FROM CLIENTES WITH(NOLOCK)
	ELSE
		SELECT NOME, ID, CPF, IDCLIENTE FROM CLIENTES WITH(NOLOCK) WHERE ID = @ID
END
