using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FI.AtividadeEntrevista.BLL
{
    public class BoBeneficiario
    {
        /// <summary>
        /// Inclui um novo Beneficiario
        /// </summary>
        /// <param name="Beneficiario">Objeto de Beneficiario</param>
        public long Incluir(DML.Beneficiario Beneficiario)
        {
            DAL.DaoBeneficiario cli = new DAL.DaoBeneficiario();
            return cli.Incluir(Beneficiario);
        }

        /// <summary>
        /// Altera um Beneficiario
        /// </summary>
        /// <param name="Beneficiario">Objeto de Beneficiario</param>
        public void Alterar(DML.Beneficiario Beneficiario)
        {
            DAL.DaoBeneficiario cli = new DAL.DaoBeneficiario();
            cli.Alterar(Beneficiario);
        }


        /// <summary>
        /// Excluir o Beneficiario pelo id
        /// </summary>
        /// <param name="id">id do Beneficiario</param>
        /// <returns></returns>
        public void Excluir(long id)
        {
            DAL.DaoBeneficiario benef = new DAL.DaoBeneficiario();
            benef.Excluir(id);
        }

        public DML.Beneficiario Consultar(long id)
        {
            DAL.DaoBeneficiario benef = new DAL.DaoBeneficiario();
            return benef.Consultar(id);
        }
        /// <summary>
        /// Lista os Beneficiarios
        /// </summary>
        public List<DML.Beneficiario> Pesquisa(long idCliente, int iniciarEm, int quantidade, string campoOrdenacao, bool crescente, out int qtd)
        {
            DAL.DaoBeneficiario benef = new DAL.DaoBeneficiario();
            return benef.Pesquisa(idCliente, iniciarEm,  quantidade, campoOrdenacao, crescente, out qtd);
        }

        /// <summary>
        /// VerificaExistencia
        /// </summary>
        /// <param name="CPF"></param>
        /// <returns></returns>
        public bool VerificarExistencia(long idCliente,string CPF)
        {
            DAL.DaoBeneficiario benef = new DAL.DaoBeneficiario();
            return benef.VerificarExistencia(idCliente, CPF);
        }

    }
}
