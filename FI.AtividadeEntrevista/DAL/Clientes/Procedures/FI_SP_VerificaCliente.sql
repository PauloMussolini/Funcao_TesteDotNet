/*
	29/04/2020
	Alterado por Paulo de Tarso Mussolini
	Verifica existência de CPF
	Feature: 
*/
CREATE PROC FI_SP_VerificaCliente
	@CPF VARCHAR(11)
AS
BEGIN
	SELECT 1 FROM CLIENTES WITH (NOLOCK) WHERE CPF = @CPF
END

