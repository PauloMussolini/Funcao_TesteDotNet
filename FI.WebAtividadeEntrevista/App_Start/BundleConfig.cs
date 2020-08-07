using System.Web;
using System.Web.Optimization;

namespace WebAtividadeEntrevista
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));
            
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/jtable").Include(
                      "~/Scripts/jtable/jquery.jtable.min.js",
                      "~/Scripts/jtable/localization/jquery.jtable.pt-BR.js"));

            bundles.Add(new ScriptBundle("~/bundles/clientes").Include(
                      "~/Scripts/Clientes/FI.Clientes.js", 
                      "~/Scripts/Clientes/FI.ValidaCpf.js",
                      "~/Scripts/Clientes/FI.VerificaExistenciaCpf.js",
                      "~/Scripts/Dialog.js",
                      "~/Scripts/jquery.mask.js"));

            bundles.Add(new ScriptBundle("~/bundles/listClientes").Include(
                      "~/Scripts/Clientes/FI.ListClientes.js",
                      "~/Scripts/Beneficiarios/FI.ListBeneficiarios.js",
                      "~/Scripts/Dialog.js",
                      "~/Scripts/jquery.mask.js",
                      "~/Scripts/Clientes/FI.ValidaCpf.js"));

            bundles.Add(new ScriptBundle("~/bundles/altClientes").Include(
                      "~/Scripts/Clientes/FI.AltClientes.js",
                      "~/Scripts/Clientes/FI.ValidaCpf.js",
                      "~/Scripts/Clientes/FI.VerificaExistenciaCpf.js",
                      "~/Scripts/Dialog.js",
                      "~/Scripts/jquery.mask.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/jtable").Include(
                      "~/Scripts/jtable/themes/metro/darkgray/jtable.css"));

            bundles.Add(new ScriptBundle("~/bundles/Beneficiario").Include(
                     "~/Scripts/Beneficiarios/FI.Beneficiarios.js",
                      "~/Scripts/Clientes/FI.ValidaCpf.js",
                      "~/Scripts/Clientes/FI.VerificaExistenciaCpf.js"));

        }
    }
}
