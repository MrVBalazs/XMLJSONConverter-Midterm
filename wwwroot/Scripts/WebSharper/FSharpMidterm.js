(function(Global)
{
 "use strict";
 var FSharpMidterm,Client,FSharpMidterm_Templates,WebSharper,Concurrency,Remoting,AjaxRemotingProvider,UI,TemplateHole,Var$1,Templating,Runtime,Server,ProviderBuilder,Handler,TemplateHoleModule,Text,TextView,TemplateInstance,Client$1,Templates;
 FSharpMidterm=Global.FSharpMidterm=Global.FSharpMidterm||{};
 Client=FSharpMidterm.Client=FSharpMidterm.Client||{};
 FSharpMidterm_Templates=Global.FSharpMidterm_Templates=Global.FSharpMidterm_Templates||{};
 WebSharper=Global.WebSharper;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 UI=WebSharper&&WebSharper.UI;
 TemplateHole=UI&&UI.TemplateHole;
 Var$1=UI&&UI.Var$1;
 Templating=UI&&UI.Templating;
 Runtime=Templating&&Templating.Runtime;
 Server=Runtime&&Runtime.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateHoleModule=UI&&UI.TemplateHoleModule;
 Text=TemplateHoleModule&&TemplateHoleModule.Text;
 TextView=TemplateHoleModule&&TemplateHoleModule.TextView;
 TemplateInstance=Server&&Server.TemplateInstance;
 Client$1=UI&&UI.Client;
 Templates=Client$1&&Client$1.Templates;
 Client.JsonToXMLPage$38$22=function(jsonOutput)
 {
  return function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpMidterm:FSharpMidterm.Server.convertXMLToJSON:-1495486689",[TemplateHole.Value(e.Vars.Hole("fileupload")).Get()]),function(a)
    {
     jsonOutput.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Client.JsonToXMLPage=function()
 {
  var jsonOutput,b,_this,_this$1,_this$2,_this$3,_this$4,O,_this$5,_this$6,t,p,i;
  jsonOutput=Var$1.Create$1("");
  return(b=(_this=(_this$1=(_this$2=(_this$3=(_this$4=(O=jsonOutput.get_View(),(_this$5=(_this$6=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onupload",function()
  {
   return t.i;
  },function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpMidterm:FSharpMidterm.Server.convertXMLToJSON:-1495486689",[TemplateHole.Value(e.Vars.Hole("fileupload")).Get()]),function(a)
    {
     jsonOutput.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  })),t)),(_this$6.h.push(new Text.New("herotitle","XML -> JSON Converter")),_this$6)),(_this$5.h.push(new TextView.New("output",O)),_this$5))),(_this$4.h.push(new Text.New("tasktitle","Enter your XML Code:")),_this$4)),(_this$3.h.push(new Text.New("outputtype","JSON")),_this$3)),(_this$2.h.push(new Text.New("buttonconverttitle","Convert XML to JSON")),_this$2)),(_this$1.h.push(new Text.New("navigatetitle","Json to XML Converter")),_this$1)),(_this.h.push(new Text.New("navigatelink","/")),_this)),(p=Handler.CompleteHoles(b.k,b.h,[["fileupload",0,null]]),(i=new TemplateInstance.New(p[1],FSharpMidterm_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 Client.Main$20$22=function(xmlOutput)
 {
  return function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpMidterm:FSharpMidterm.Server.convertJSONToXML:-1495486689",[TemplateHole.Value(e.Vars.Hole("fileupload")).Get()]),function(a)
    {
     xmlOutput.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 Client.Main=function()
 {
  var xmlOutput,b,_this,_this$1,_this$2,_this$3,_this$4,O,_this$5,_this$6,t,p,i;
  xmlOutput=Var$1.Create$1("");
  return(b=(_this=(_this$1=(_this$2=(_this$3=(_this$4=(O=xmlOutput.get_View(),(_this$5=(_this$6=(t=new ProviderBuilder.New$1(),(t.h.push(Handler.EventQ2(t.k,"onupload",function()
  {
   return t.i;
  },function(e)
  {
   var _;
   Concurrency.StartImmediate((_=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpMidterm:FSharpMidterm.Server.convertJSONToXML:-1495486689",[TemplateHole.Value(e.Vars.Hole("fileupload")).Get()]),function(a)
    {
     xmlOutput.Set(a);
     return Concurrency.Zero();
    });
   })),null);
  })),t)),(_this$6.h.push(new Text.New("herotitle","JSON -> XML Converter")),_this$6)),(_this$5.h.push(new TextView.New("output",O)),_this$5))),(_this$4.h.push(new Text.New("tasktitle","Enter your JSON Code:")),_this$4)),(_this$3.h.push(new Text.New("outputtype","XML")),_this$3)),(_this$2.h.push(new Text.New("buttonconverttitle","Convert JSON to XML")),_this$2)),(_this$1.h.push(new Text.New("navigatetitle","XML To Json Converter")),_this$1)),(_this.h.push(new Text.New("navigatelink","/xmltojson")),_this)),(p=Handler.CompleteHoles(b.k,b.h,[["fileupload",0,null]]),(i=new TemplateInstance.New(p[1],FSharpMidterm_Templates.mainform(p[0])),b.i=i,i))).get_Doc();
 };
 FSharpMidterm_Templates.mainform=function(h)
 {
  Templates.LoadLocalTemplates("jsontoxmlpage");
  return h?Templates.NamedTemplate("jsontoxmlpage",{
   $:1,
   $0:"mainform"
  },h):void 0;
 };
}(self));
