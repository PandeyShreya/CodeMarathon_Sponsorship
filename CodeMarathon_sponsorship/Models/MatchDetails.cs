using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace CodeMarathon_sponsorship.Models
{
    public class MatchDetails
    {
        //(ContractID, PaymentDate, AmountPaid, PaymentStatus)
        public int MatchId { get; set; }
        [Required (ErrorMessage = "Immproper match ID")]

        public DateTime? MatchDate { get; set; }

        public string Location { get; set; }
        public string MatchName { get; set; }

        public double TotalAmountOfPayments { get; set; }



    }

}
