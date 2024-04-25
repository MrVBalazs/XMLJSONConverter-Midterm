namespace FSharpMidterm

open WebSharper
open WebSharper.Sitelets
open WebSharper.UI
open WebSharper.UI.Server

type EndPoint =
    | [<EndPoint "/">] JSONToXML
    | [<EndPoint "/xmltojson">] XMLToJSON

module Templating =
    let ConverterTemplate ctx action (title: string) (body: Doc list) =
        Content.Page(
            Templates.MainTemplate()
                .Title(title)
                .Body(body)
                .Doc()
        )
        
module Site =
    open WebSharper.UI.Html
    open type WebSharper.UI.ClientServer

    let JSONToXML ctx =
        Templating.ConverterTemplate ctx EndPoint.JSONToXML "JSON TO XML Converter" [
            div [] [client (Client.Main())]
        ]

    let XMLToJSON ctx =
        Templating.ConverterTemplate ctx EndPoint.XMLToJSON "XML TO JSON Converter" [
            div [] [client (Client.JsonToXMLPage())]
        ]

    [<Website>]
    let Main =
        Application.MultiPage (fun ctx endpoint ->
            match endpoint with
            | EndPoint.JSONToXML -> JSONToXML ctx
            | EndPoint.XMLToJSON -> XMLToJSON ctx
        )