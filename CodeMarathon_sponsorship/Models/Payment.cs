using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace CodeMarathon_sponsorship.Models
{
    public class Payment
    {
        //(ContractID, PaymentDate, AmountPaid, PaymentStatus)
        public int PaymentId { get; set; }
        [Required(ErrorMessage = "Provide a PayemntID")]

        public int ContractID { get; set; }

        public string PaymentDate { get; set; }
        [Required(ErrorMessage = "Provide PaymentDate")]
        public double AmountPaid { get; set; }
        [Required(ErrorMessage = "Provide AmountPaid")]
        public string PaymentStatus { get; set; }
 

    }

}
//public string Category { get; set; }
//[Range(1, 5, ErrorMessage = "StarRating can be within  the range 1-5")]

// public double StarRating { get; set; }
//[AllowNull]  