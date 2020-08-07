﻿/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Inclusão de coluna CPF
	Feature: 
*/
CREATE PROC FI_SP_IncBeneficiario
	@CPF		VARCHAR(11),
	@NOME		VARCHAR(50),
	@IDCLIENTE	BIGINT
AS
BEGIN
	INSERT INTO 
		BENEFICIARIOS
		(CPF, NOME,IDCLIENTE) 
	VALUES 
		(@CPF, @NOME, @IDCLIENTE)

	SELECT SCOPE_IDENTITY()
END
