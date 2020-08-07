/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Verifica existência de CPF
	Feature: 
*/
CREATE PROC FI_SP_VerificaBeneficiario
	@IDCLIENTE BIGINT,
	@CPF VARCHAR(11)
AS
BEGIN
	SELECT 1 FROM BENEFICIARIOS WITH (NOLOCK) WHERE IDCLIENTE = @IDCLIENTE AND CPF = @CPF
END