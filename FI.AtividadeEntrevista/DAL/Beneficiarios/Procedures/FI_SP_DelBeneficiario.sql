/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Inclusão de coluna CPF
	Feature: 
*/
CREATE PROC FI_SP_DelBeneficiario
	@ID BIGINT
AS
BEGIN
	DELETE BENEFICIARIOS WHERE ID = @ID
END