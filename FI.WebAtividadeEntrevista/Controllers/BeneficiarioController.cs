using FI.AtividadeEntrevista.BLL;
using FI.AtividadeEntrevista.DML;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebAtividadeEntrevista.Models;

namespace WebAtividadeEntrevista.Controllers
{
    public class BeneficiarioController : Controller
    {
        // GET: Beneficiario
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public PartialViewResult Incluir(long idCliente)
        {
            ViewBag.idCliente = idCliente;
            ViewBag.Op = "INS";
            ViewBag.Title = "Inclusão de beneficiário";
            return PartialView("_Incluir");
        }

        [HttpPost]
        public JsonResult Incluir(BeneficiarioModel model)
        {

            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {

                model.Id = bo.Incluir(new Beneficiario()
                {
                    idCliente = model.IdCliente,
                    Id = model.Id,
                    Nome = model.Nome,
                    Cpf = model.Cpf.Replace("." ,"").Replace(".", "").Replace(".", "").Replace("-","")
                });


                return new JsonResult()
                {
                    Data = "Beneficiário cadastrado com sucesso"
                };
            }

        }

        [HttpGet]
        public PartialViewResult Alterar(long id)
        {
            ViewBag.id = id;
            ViewBag.Op = "UPD";
            ViewBag.Title = "Alteração de beneficiário";

            BoBeneficiario bo = new BoBeneficiario();

            Beneficiario beneficiario = bo.Consultar(id);
            Models.BeneficiarioModel model = null;

            if (beneficiario != null)
            {
                model = new BeneficiarioModel()
                {
                    Id = beneficiario.Id,
                    IdCliente = beneficiario.idCliente,
                    Nome = beneficiario.Nome,
                    Cpf = beneficiario.Cpf.Replace("." ,"").Replace(".", "").Replace(".", "")
                };


            }
            return PartialView("_Incluir",model);
        }

        [HttpPost]
        public JsonResult Alterar(Beneficiario model)
        {
            BoBeneficiario bo = new BoBeneficiario();

            if (!this.ModelState.IsValid)
            {
                List<string> erros = (from item in ModelState.Values
                                      from error in item.Errors
                                      select error.ErrorMessage).ToList();

                Response.StatusCode = 400;
                return Json(string.Join(Environment.NewLine, erros));
            }
            else
            {
                bo.Alterar(new Beneficiario()
                {
                    Id = model.Id,
                    Nome = model.Nome,
                    Cpf = model.Cpf.Replace(".", "").Replace(".", "").Replace(".", "").Replace("-", ""),
                    idCliente = model.idCliente
                });

                return new JsonResult()
                {
                    Data =  "Beneficiário alterado com sucesso"
                };
            }
        }

        [HttpPost]
        public JsonResult Excluir(long Id)
        {
            BoBeneficiario bo = new BoBeneficiario();

                bo.Excluir(Id);

                return new JsonResult()
                {
                    Data = "Beneficiário Excluído com sucesso"
                };
            
        }




        [HttpPost]
        public JsonResult BeneficiarioList(long idCliente, int jtStartIndex = 0, int jtPageSize = 0, string jtSorting = null)
        {
            try
            {
                int qtd = 0;
                string campo = string.Empty;
                string crescente = string.Empty;
                string[] array = jtSorting.Split(' ');

                if (array.Length > 0)
                    campo = array[0];

                if (array.Length > 1)
                    crescente = array[1];

                List<Beneficiario> beneficiarios = new BoBeneficiario().Pesquisa(idCliente, jtStartIndex, jtPageSize, campo, crescente.Equals("ASC", StringComparison.InvariantCultureIgnoreCase), out qtd);

                //Return result to jTable
                return Json(new { Result = "OK", Records = beneficiarios, TotalRecordCount = qtd });
            }
            catch (Exception ex)
            {

                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }
        /// <summary>
        /// Verifica existencia do CPF na tabela Beneficiario
        /// </summary>
        /// <param name="cpf"></param>
        /// <returns></returns>
        public JsonResult VerificaExistencia(long idCliente,string cpf)
        {
            bool result = new BoBeneficiario().VerificarExistencia(idCliente, cpf);
            return Json(new { Result = result });
        }

    }
}