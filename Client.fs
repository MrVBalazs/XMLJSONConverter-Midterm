namespace FSharpMidterm

open WebSharper
open WebSharper.UI
open WebSharper.UI.Templating
open WebSharper.UI.Notation
open WebSharper.JavaScript

[<JavaScript>]
module Templates =
    type MainTemplate = Template<"JSONToXMLPage.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>
    type JSONToXML = Template<"JSONToXMLPage.html", ClientLoad.FromDocument, ServerLoad.WhenChanged>

[<JavaScript>]
module Client =
    open FSharpMidterm.Server
    let Main () =
        let xmlOutput = Var.Create ""
        Templates.MainTemplate.MainForm()
            .OnUpload(fun e ->
                async {
                    let! res = convertJSONToXML e.Vars.FileUpload.Value
                    xmlOutput := res
                }|> Async.StartImmediate
            )
            .HeroTitle("JSON -> XML Converter")
            .Output(xmlOutput.View)
            .TaskTitle("Enter your JSON Code:")
            .OutputType("XML")
            .ButtonConvertTitle("Convert JSON to XML")
            .NavigateTitle("XML To Json Converter")
            .NavigateLink("/xmltojson")
            .Doc()
        
    let JsonToXMLPage () =
        let jsonOutput = Var.Create ""
        Templates.MainTemplate.MainForm()
            .OnUpload(fun e ->
                async {
                    let! res = convertXMLToJSON e.Vars.FileUpload.Value
                    jsonOutput := res
                }|> Async.StartImmediate
            )
            .HeroTitle("XML -> JSON Converter")
            .Output(jsonOutput.View)
            .TaskTitle("Enter your XML Code:")
            .OutputType("JSON")
            .ButtonConvertTitle("Convert XML to JSON")
            .NavigateTitle("Json to XML Converter")
            .NavigateLink("/")
            .Doc()
        
