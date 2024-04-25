namespace FSharpMidterm

open System.Text
open System.Xml
open Newtonsoft.Json
open Newtonsoft.Json.Linq
open WebSharper

module Server =
    [<Rpc>]
    let convertJSONToXML (json: string) =
        let jsonObj = JsonConvert.DeserializeObject<JObject>(json)
        let xmlNode = JsonConvert.DeserializeXNode(jsonObj.ToString(), "Root")
        let xmlDoc = new XmlDocument()
        xmlDoc.LoadXml(xmlNode.ToString())
        
        let xmlSettings = new XmlWriterSettings()
        xmlSettings.Indent <- true
        xmlSettings.IndentChars <- "\t"
        xmlSettings.NewLineChars <- "\n"
        xmlSettings.NewLineHandling <- NewLineHandling.Replace
        
        let sb = new StringBuilder()
        let writer = XmlWriter.Create(sb, xmlSettings)
        xmlDoc.Save(writer)
        
        async {
            let xmlString = sb.ToString()
            let xmlStringWithBr = xmlString.Replace("\n", "\n")
            let xmlStringWithBrAndNbsp = xmlStringWithBr.Replace("\t", "     ")
            return xmlStringWithBrAndNbsp
        }
    [<Rpc>]
    let convertXMLToJSON (xml: string) =
        let xmlDoc = new XmlDocument()
        xmlDoc.LoadXml(xml)
        let json = JsonConvert.SerializeXmlNode(xmlDoc)
        
        async {
            return json
        }