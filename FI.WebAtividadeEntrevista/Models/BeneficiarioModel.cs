using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAtividadeEntrevista.Models
{
    /// <summary>
    /// Classe de Modelo de Cliente
    /// </summary>
    public class BeneficiarioModel
    {
        
        public long Id { get; set; }

        /// <summary>
        /// Cpf
        /// </summary>  
        [RegularExpression(@"[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}", ErrorMessage = "Digite um Cpf válido")]
        public string Cpf { get; set; }

        /// <summary>
        /// Nome
        /// </summary>
        [Required]
        public string Nome { get; set; }

        /// <summary>
        /// Sobrenome
        /// </summary>
        [Required]
        public long IdCliente { get; set; }

    }    
}