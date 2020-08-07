/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Inclusão de coluna CPF
	Feature: 
*/

CREATE PROC FI_SP_AltBeneficiario
	@Id           BIGINT,
	@CPF		   VARCHAR (11),
    @NOME          VARCHAR (50),
    @IDCLIENTE     BIGINT

AS
BEGIN
	UPDATE BENEFICIARIOS 
	SET 
		CPF = @CPF,
		NOME = @NOME, 
		IDCLIENTE = @IDCLIENTE
	WHERE 
		Id = @Id
END
