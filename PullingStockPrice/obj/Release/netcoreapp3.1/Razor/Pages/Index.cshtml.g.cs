#pragma checksum "C:\Users\micha\Desktop\Web Development\PullingStockPrice\PullingStockPrice\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "400c95579a771dbfc61bd6b4eb1fa694ef7d536a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(PullingStockPrice.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace PullingStockPrice.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\micha\Desktop\Web Development\PullingStockPrice\PullingStockPrice\Pages\_ViewImports.cshtml"
using PullingStockPrice;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"400c95579a771dbfc61bd6b4eb1fa694ef7d536a", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5ba3aad71994a8a34137737129b9790957d47525", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "C:\Users\micha\Desktop\Web Development\PullingStockPrice\PullingStockPrice\Pages\Index.cshtml"
  
    ViewData["Title"] = "Stock Price Webpage";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html>\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "400c95579a771dbfc61bd6b4eb1fa694ef7d536a3185", async() => {
                WriteLiteral(@"
    <div class=""text-center"" id=""app"">
        <div class=""bg-faded p-1"">
            <h1>
                Search Stock Prices (US Stocks Only):
            </h1>
            <h3 style=""color: #778899"">Current Time (EST): {{ time }}</h3>
        </div>
        <div class=""input-group input-group-lg mb-4"">
            <div class=""input-group-prepend"" id=""previous-day-high-low-prepend"">
                <span class=""input-group-text"" id=""previous-day-high-low-prepend-text"">Previous Market Day High and Low</span>
            </div>
            <input type=""text"" class=""form-control"" name=""company"" id=""company-input"" />
            <div class=""input-group-append"" id=""previous-day-high-low-append"">
                <button type=""button"" class=""btn btn-dark"" onclick=""getDailyStockPrice()"">Submit</button>
            </div>
        </div>
        <div class=""badge badge-danger mb-4"" style=""float:left"">
            <h3>Low: {{ low }} </h3>
        </div>
        <div class=""badge badge-success mb-4");
                WriteLiteral(@""" style=""float:right"">
            <h3>High: {{ high }} </h3>
        </div>
        <div class=""input-group input-group-lg my-4"">
            <div class=""input-group-prepend"" id=""previous-day-current-price-prepend"">
                <span class=""input-group-text"" id=""previous-day-current-price-prepend-text"">Current Market Price</span>
            </div>
            <input type=""text"" class=""form-control"" name=""current-price"" id=""current-price-input"" />
            <div class=""input-group-append"" id=""previous-day-current-price-append"">
                <button type=""button"" class=""btn btn-dark"" onclick=""getCurrentStockPrice()"">Submit</button>
            </div>
        </div>
        <div id=""current-price-container"">
            <h3>Current Price (Previous Day): {{ currentPrice }} </h3>
        </div>
    </div>
    <script src=""/lib/vue/vue.js""></script>
    <script src=""js/site.js""></script>
");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
