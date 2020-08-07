/*
	30/04/2020
	Criado por Paulo de Tarso Mussolini
	Inclusão de coluna CPF
	Feature: 
*/
CREATE PROC FI_SP_PesqBeneficiario
	@IDCLIENTE BIGINT,
	@iniciarEm int,
	@quantidade int,
	@campoOrdenacao varchar(200),
	@crescente bit	
AS
BEGIN
SET NoCount On
	DECLARE @SCRIPT NVARCHAR(MAX)
	DECLARE @CAMPOS NVARCHAR(MAX)
	DECLARE @WHERE NVARCHAR(50)
	DECLARE @ORDER VARCHAR(50)
	
	IF(@campoOrdenacao = 'EMAIL')
		SET @ORDER =  ' EMAIL '
	ELSE
		SET @ORDER = ' NOME '

	IF(@crescente = 0)
		SET @ORDER = @ORDER + ' DESC'
	ELSE
		SET @ORDER = @ORDER + ' ASC'

	SET @WHERE =  @IDCLIENTE
	SET @CAMPOS = '@iniciarEm int,@quantidade int'


	SET @SCRIPT = 
	'SELECT ID, NOME, CPF, IDCLIENTE FROM
		(SELECT ROW_NUMBER() OVER (ORDER BY ' + @ORDER + ') AS Row, ID, NOME, CPF, IDCLIENTE 
		 FROM BENEFICIARIOS WITH(NOLOCK) WHERE IDCLIENTE = ' + @WHERE + ' )
		AS BeneficiariosWithRowNumbers
	WHERE Row > @iniciarEm AND Row <= (@iniciarEm + @quantidade) ORDER BY '
	
	SET @SCRIPT = @SCRIPT + @ORDER
			
	EXECUTE SP_EXECUTESQL @SCRIPT,@CAMPOS,@iniciarEm, @quantidade

	SELECT COUNT(1) FROM BENEFICIARIOS WITH(NOLOCK) WHERE IDCLIENTE = @IDCLIENTE

	SET NoCount Off
END