---
slug: nanoframework-gpio-i2c-spi
title: .NET nanoFramework networking and Azure
authors:
  name: laurent
  name: josesimoes
tags: [dotnet, nanoframework]
---

# Networking and Azure

.NET nanoFramework offers native secure network capabilities. The capabilities may differ depending on the MCU and associated hardware but if there is an ethernet adaptor or a Wi-Fi module, except if they are extremely exotic, they'll be supported! For example, the ESP32 supports secure Wi-Fi connectivity, all certificates to authenticate servers and devices are supported making the connection secure from end to end using the underlying TLS/SSL.

Watch the [Connect to Azure IoT](https://www.youtube.com/watch?v=pxXgU3XcRr4&t=5s) "IoT Show" episode to learn more about creating secure connections.

Connecting to Azure IoT is easy with library support for Device Provisioning Services (DPS), SAS token and certificate authentication, Cloud to Device (C2D) messages, Device to Cloud (D2C) messages, remote function calls, twins, for clients and modules! There is also full support for [IoT Plug & Play](https://github.com/nanoframework/nanoFramework.Azure.Devices).

## Announcing the first .NET nanoFramework Azure Certified Device

In May 2022, the PalThree device from OrgPal based on an STM32F7 MCU is the first [Azure Certified Device running .NET nanoFramework](https://www.nanoframework.net/palthree-board-becomes-azure-certified-device/) to be approved. This device is also IoT Plug and Play certified. The .NET nanoFramework is ready for production.

## .NET nanoFramework communications capabilities

The .NET nanoFramework supports a wide range of communicators protocols including:

1. TLS,
1. HTTPS,
1. .NET nanoFramework WebServer,
1. WebSockets,
1. SignalR,
1. MQTT, including support for MQTT v5.0,
1. [AMQP](https://github.com/nanoframework/amqpnetlite),
1. [TcpClient](https://github.com/nanoframework/System.Net.Sockets.TcpClient),
1. and [UdpClient](https://github.com/nanoframework/System.Net.Sockets.UdpClient).


<!-- 1.  and we'll focus again on Azure IoT in a more detailed way. -->

## TLS and HTTPS

TLS and secure HTTP is supported. You will find examples in the [sample repository](https://github.com/nanoframework/Samples/tree/main/samples/HTTP). The samples demonstrate how to use `WebRequest`, `HttpListener` as well as how to make low-level REST calls to Azure services.

HttpClient is fully implemented and is a very convenient way to call REST services.  HttpClient works just like the full .NET implementation. You'll find the source in the .NET nanoFramework [System.Net.Http](https://github.com/nanoframework/System.Net.Http) repository.

To use `HttpClient`, create the HttpClient object and then perform calls. Note that `HttpClient` is meant to be reused throughout the application lifecycle. There is no need to create a new instance every time a call has to be performed. Like this:

```csharp
static readonly HttpClient _httpClient = new HttpClient();
```

To pass the CA root certificate to validate the secure server certificate. The CA root cert can also come from a binary file or text file from a resource.

```csharp
_httpClient.HttpsAuthentCert = new X509Certificate(
@"-----BEGIN CERTIFICATE-----
MIIEDzCCAvegAwIBAgIBADANBgkqhkiG9w0BAQUFADBoMQswCQYDVQQGEwJVUzEl
MCMGA1UEChMcU3RhcmZpZWxkIFRlY2hub2xvZ2llcywgSW5jLjEyMDAGA1UECxMp
U3RhcmZpZWxkIENsYXNzIDIgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMDQw
NjI5MTczOTE2WhcNMzQwNjI5MTczOTE2WjBoMQswCQYDVQQGEwJVUzElMCMGA1UE
ChMcU3RhcmZpZWxkIFRlY2hub2xvZ2llcywgSW5jLjEyMDAGA1UECxMpU3RhcmZp
ZWxkIENsYXNzIDIgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEgMA0GCSqGSIb3
DQEBAQUAA4IBDQAwggEIAoIBAQC3Msj+6XGmBIWtDBFk385N78gDGIc/oav7PKaf
8MOh2tTYbitTkPskpD6E8J7oX+zlJ0T1KKY/e97gKvDIr1MvnsoFAZMej2YcOadN
+lq2cwQlZut3f+dZxkqZJRRU6ybH838Z1TBwj6+wRir/resp7defqgSHo9T5iaU0
X9tDkYI22WY8sbi5gv2cOj4QyDvvBmVmepsZGD3/cVE8MC5fvj13c7JdBmzDI1aa
K4UmkhynArPkPw2vCHmCuDY96pzTNbO8acr1zJ3o/WSNF4Azbl5KXZnJHoe0nRrA
1W4TNSNe35tfPe/W93bC6j67eA0cQmdrBNj41tpvi/JEoAGrAgEDo4HFMIHCMB0G
A1UdDgQWBBS/X7fRzt0fhvRbVazc1xDCDqmI5zCBkgYDVR0jBIGKMIGHgBS/X7fR
zt0fhvRbVazc1xDCDqmI56FspGowaDELMAkGA1UEBhMCVVMxJTAjBgNVBAoTHFN0
YXJmaWVsZCBUZWNobm9sb2dpZXMsIEluYy4xMjAwBgNVBAsTKVN0YXJmaWVsZCBD
bGFzcyAyIENlcnRpZmljYXRpb24gQXV0aG9yaXR5ggEAMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAAWdP4id0ckaVaGsafPzWdqbAYcaT1epoXkJKtv3
L7IezMdeatiDh6GX70k1PncGQVhiv45YuApnP+yz3SFmH8lU+nLMPUxA2IGvd56D
eruix/U0F47ZEUD0/CwqTRV/p2JdLiXTAAsgGh1o+Re49L2L7ShZ3U0WixeDyLJl
xy16paq8U4Zt3VekyvggQQto8PT7dL5WXXp59fkdheMtlb71cZBDzI0fmgAKhynp
VSJYACPq4xJDKVtHCN2MQWplBqjlIapBtJUhlbl90TSrE9atvNziPTnNvT51cKEY
WQPJIrSPnNVeKtelttQKbfi3QBFGmh95DmK/D5fs4C8fF5Q=
-----END CERTIFICATE-----");
```

It's possible to add HTTP headers that will be sent with each request.

```csharp
_httpClient.DefaultRequestHeaders.Add("x-ms-blob-type", "BlockBlob");
```

### Perform an HTTP GET request

Here's a example of a HTTP request to read some content as a string:

```csharp
HttpResponseMessage response = _httpClient.Get("https://httpbin.org/get");
response.EnsureSuccessStatusCode();
var responseBody = response.Content.ReadAsString();
```

The above call would return something similar to the following, which can be output in Visual Studio by calling `Debug.WriteLine(responseBody)`:

```console
{
  "args": {},
  "headers": {
    "Host": "httpbin.org",
    "X-Amzn-Trace-Id": "Root=1-6214aad3-38e5f8357bdf90530300eb5f",
    "X-Ms-Blob-Type": "BlockBlob"
  },
  "origin": "5.249.47.208",
  "url": "https://httpbin.org/get"
}
```

Note the call to `response.EnsureSuccessStatusCode();`. This will throw an `HttpRequestException` in case the status code from the HTTP request is not a successful one.

### Perform an HTTP POST request

Following is an example of an HTTP request performing a POST request to send some JSON content to an endpoint.

```csharp
var content = new StringContent("{\"someProperty\":\"someValue\"}", Encoding.UTF8, "application/json");
var result = _httpClient.Post("https://httpbin.org/anything", content);
result.EnsureSuccessStatusCode();
```

Worth noting that the JSON content above it's presented as a simple string to simplify the code. There is a [json library](https://github.com/nanoframework/nanoFramework.Json) available to help with serializing and deserializing from/to C# classes, even the most complex ones.

Note the call to `response.EnsureSuccessStatusCode();` to make sure the HTTP request was successfully performed.

### Download binary content to a file

Using `HttpClient` makes it easy to deal with binary content. The following is an example of how to download a file from a web server.

```csharp
HttpResponseMessage response = _httpClient.Get("https://storage-on-the-cloud.net/file-with-binary-content");
response.EnsureSuccessStatusCode();

using FileStream fs = new FileStream($"I:\\i-am-a-binary-file.bin", FileMode.Create, FileAccess.Write);
response.Content.ReadAsStream().CopyTo(fs);
```

### Debugging through a reverse proxy

When code is deployed to an MCU it might be desirable to let the device connect to your development machine running IIS Express. This can be achieved with a proxy such as [iisexpress-proxy](https://www.npmjs.com/package/iisexpress-proxy).

Be aware that this leads to SocketExceptions with the current version of **nanoFramework** System.Net.Http when sending consecutive requests to your development machine. A simple retry mechanism in Debug mode will get around this.

## WebServer: almost like full ASP.NET

The title is correct, we kept the core ideas of the full ASP.NET framework. We shrink everything possible, but kept the controller, security authentication, and attribute decoration concepts. You'll find the source in the .NET nanoFramework [WebServer](https://github.com/nanoframework/nanoFramework.WebServer) repository. Features include:

- Handling multi-thread requests
- Serve static files on any storage
- Handle parameters in URL
- Multiple WebServer running at the same time
- Supports GET/PUT
- Supports content in POST
- Supports any type of header
- Reflection for easy usage of controllers and routes
- Helpers to return error codes
- HTTPS support
- [URL decode/encode](https://github.com/nanoframework/lib-nanoFramework.System.Net.Http/blob/develop/nanoFramework.System.Net.Http/Http/System.Net.HttpUtility.cs)

The main limitations are:

- No zip support for request or response streams
- No built-in dependency injection. This is coming and in private preview for the moment

### Usage

Specify a port, a timeout for the queries, and add an event handler for incoming requests.

```csharp
using (WebServer server = new WebServer(80, HttpProtocol.Http)
{
    // Add a handler for commands that are received by the server.
    server.CommandReceived += ServerCommandReceived;

    // Start the server.
    server.Start();

    Thread.Sleep(Timeout.Infinite);
}
```

You can also pass a controller and routes and method decoration is supported.

```csharp
using (WebServer server = new WebServer(80, HttpProtocol.Http, new Type[] { typeof(ControllerPerson), typeof(ControllerTest) }))
{
    // Start the server.
    server.Start();

    Thread.Sleep(Timeout.Infinite);
}
```

In this case, you're passing 2 classes where you have public methods decorated which will be called every time the route is found.

With the previous example, a straightforward Test controller will look like that:

```csharp
public class ControllerTest
{
    [Route("test"), Route("Test2"), Route("test42"), Route("TEST")]
    [CaseSensitive]
    [Method("GET")]
    public void RoutePostTest(WebServerEventArgs e)
    {
        string route = $"The route asked is {e.Context.Request.RawUrl.TrimStart('/').Split('/')[0]}";
        e.Context.Response.ContentType = "text/plain";
        WebServer.OutPutStream(e.Context.Response, route);
    }

    [Route("test/any")]
    public void RouteAnyTest(WebServerEventArgs e)
    {
        WebServer.OutputHttpCode(e.Context.Response, HttpStatusCode.OK);
    }
}
```

In this example, the `RoutePostTest` routes are case sensitive as the routes are decorated with [CaseSensitive]. GET requests to routes `test`, `Test2`, `test42`, or `TEST` will succeed. A GET request to `Test` would fail. GET parameters are also supported.

The `RouteAnyTest`is called whenever the URL `test/any` is requested no matter what method is used.

There is a more advanced example with a simple REST API to get a list of Person and add a Person. Check it in the [sample](https://github.com/nanoframework/Samples/blob/main/samples/Webserver/WebServer.Sample/ControllerPerson.cs).

>> **Important**:
> * By default, the routes are not case sensitive and the attribute **must** be lowercase
> * If you want to use case-sensitive routes like in the previous example, use the attribute `CaseSensitive`. As in the previous example, you **must** write the route as you want it to be responded to.

And you can pass default credentials to the server:

```csharp
using (WebServer server = new WebServer(80, HttpProtocol.Http, new Type[] { typeof(ControllerPerson), typeof(ControllerTest), typeof(ControllerAuth) }))
{
    // To test authentication with various scenarios
    server.ApiKey = "ATopSecretAPIKey1234";
    server.Credential = new NetworkCredential("topuser", "topPassword");

    // Start the server.
    server.Start();

    Thread.Sleep(Timeout.Infinite);
}
```

### Managing incoming queries thru events

Very basic usage is the following:

```csharp
private static void ServerCommandReceived(object source, WebServerEventArgs e)
{
    var url = e.Context.Request.RawUrl;
    Debug.WriteLine($"Command received: {url}, Method: {e.Context.Request.HttpMethod}");

    if (url.ToLower() == "/sayhello")
    {
        // This is simple raw text returned
        WebServer.OutPutStream(e.Context.Response, "It's working, url is empty, this is just raw text, /sayhello is just returning a raw text");
    }
    else
    {
        WebServer.OutputHttpCode(e.Context.Response, HttpStatusCode.NotFound);
    }
}
```

You can do more advance scenario like returning a full HTML page:

```csharp
WebServer.OutPutStream(e.Context.Response, "<html><head>" +
    "<title>Hi from nanoFramework Server</title></head><body>You want me to say hello in a real HTML page!<br/><a href='/useinternal'>Generate an internal text.txt file</a><br />" +
    "<a href='/Text.txt'>Download the Text.txt file</a><br>" +
    "Try this url with parameters: <a href='/param.htm?param1=42&second=24&NAme=Ellerbach'>/param.htm?param1=42&second=24&NAme=Ellerbach</a></body></html>");
```

And can get parameters from a URL a an example from the previous link on the param.html page:

```csharp
if (url.ToLower().IndexOf("/param.htm") == 0)
{
    // Test with parameters
    var parameters = WebServer.decryptParam(url);
    string toOutput = "<html><head>" +
        "<title>Hi from nanoFramework Server</title></head><body>Here are the parameters of this URL: <br />";
    foreach (var par in parameters)
    {
        toOutput += $"Parameter name: {par.Name}, Value: {par.Value}<br />";
    }
    toOutput += "</body></html>";
    WebServer.OutPutStream(e.Context.Response, toOutput);
}
```

And server static files:

```csharp
var files = storage.GetFiles();
foreach (var file in files)
{
    if (file.Name == url)
    {
        WebServer.SendFileOverHTTP(e.Context.Response, file);
        return;
    }
}

WebServer.OutputHttpCode(e.Context.Response, HttpStatusCode.NotFound);
```

And also **REST API** is supported, here is a comprehensive example:

```csharp
if (url.ToLower().IndexOf("/api/") == 0)
{
    string ret = $"Your request type is: {e.Context.Request.HttpMethod}\r\n";
    ret += $"The request URL is: {e.Context.Request.RawUrl}\r\n";
    var parameters = WebServer.DecodeParam(e.Context.Request.RawUrl);
    if (parameters != null)
    {
        ret += "List of url parameters:\r\n";
        foreach (var param in parameters)
        {
            ret += $"  Parameter name: {param.Name}, value: {param.Value}\r\n";
        }
    }

    if (e.Context.Request.Headers != null)
    {
        ret += $"Number of headers: {e.Context.Request.Headers.Count}\r\n";
    }
    else
    {
        ret += "There is no header in this request\r\n";
    }

    foreach (var head in e.Context.Request.Headers?.AllKeys)
    {
        ret += $"  Header name: {head}, Values:";
        var vals = e.Context.Request.Headers.GetValues(head);
        foreach (var val in vals)
        {
            ret += $"{val} ";
        }

        ret += "\r\n";
    }

    if (e.Context.Request.ContentLength64 > 0)
    {

        ret += $"Size of content: {e.Context.Request.ContentLength64}\r\n";
        byte[] buff = new byte[e.Context.Request.ContentLength64];
        e.Context.Request.InputStream.Read(buff, 0, buff.Length);
        ret += $"Hex string representation:\r\n";
        for (int i = 0; i < buff.Length; i++)
        {
            ret += buff[i].ToString("X") + " ";
        }

    }

    WebServer.OutPutStream(e.Context.Response, ret);
}
```

This example is basic, but demonstrates how to access the HTTP method, the URL, URL parameters, content payload, and the controller called.

<!-- Example of a result with call:

![result](./doc/POSTcapture.jpg) -->

And more information, check [the complete example](https://github.com/nanoframework/Samples/tree/main/samples/Webserver) for more about this WebServer!

## Using HTTPS

You will need to generate a certificate and keys:

```csharp
X509Certificate _myWebServerCertificate509 = new X509Certificate2(_myWebServerCrt, _myWebServerPrivateKey, "1234");

// X509 RSA key PEM format 2048 bytes
        // generate with openssl:
        // > openssl req -newkey rsa:2048 -nodes -keyout selfcert.key -x509 -days 365 -out selfcert.crt
        // and paste selfcert.crt content below:
        private const string _myWebServerCrt =
@"-----BEGIN CERTIFICATE-----
MORETEXT
-----END CERTIFICATE-----";

        // this one is generated with the command below. We need a password.
        // > openssl rsa -des3 -in selfcert.key -out selfcertenc.key
        // the one below was encoded with '1234' as the password.
        private const string _myWebServerPrivateKey =
@"-----BEGIN RSA PRIVATE KEY-----
MORETEXTANDENCRYPTED
-----END RSA PRIVATE KEY-----";

using (WebServer server = new WebServer(443, HttpProtocol.Https)
{
    // Add a handler for commands that are received by the server.
    server.CommandReceived += ServerCommandReceived;
    server.HttpsCert = _myWebServerCertificate509;

    server.SslProtocols = System.Net.Security.SslProtocols.Tls | System.Net.Security.SslProtocols.Tls11 | System.Net.Security.SslProtocols.Tls12;
    // Start the server.
    server.Start();

    Thread.Sleep(Timeout.Infinite);
}
```

> IMPORTANT: because the certificate above is not issued by a Certificate Authority it won't be recognized as a valid certificate. If you want to access the nanoFramework device with your browser, for example, you'll have to add the (CRT file)[WebServer.Sample\webserver-cert.crt] as a trusted one. On Windows, you just have to double click on the CRT file and then click "Install Certificate...".

You can use an event or controller or both. Anything that has been explained before without HTTPS will also work with HTTPS.

## MQTT loves .NET nanoFramework

There is support for an MQTT client in .NET nanoFramework. You'll find the source in the .NET nanoFramework [MQTT](https://github.com/nanoframework/nanoFramework.m2mqtt) repository. The usage is the same whatever version is used, 3.1, 3.1.1, and 5.0 are supported. There are differences between v3.1.1 and v5.0. Version 5.0 brings more control and additional properties. For convenience, V5.0 properties are shown from Intellisense as `v5.0 only`. If you try to use v5.0 properties with the v3.1 or v3.1.1 protocols, they'll be ignored.

Here is a basic example of creating a v3.1.1 server and connecting to it:

```csharp
MqttClient mqtt = new MqttClient("test.mosquitto.org", 8883, true, new X509Certificate(CertMosquitto), null, MqttSslProtocols.TLSv1_2);
var ret = mqtt.Connect("nanoTestDevice", true);
if (ret != MqttReasonCode.Success)
{
    Debug.WriteLine($"ERROR connecting: {ret}");
    mqtt.Disconnect();
    return;
}
```

For the v5.0, you just need to specify the version before the connection:

```csharp
MqttClient mqtt = new MqttClient("test.mosquitto.org", 8883, true, new X509Certificate(CertMosquitto), null, MqttSslProtocols.TLSv1_2);
mqtt.ProtocolVersion = MqttProtocolVersion.Version_5;
var ret = mqtt.Connect("nanoTestDevice", true);
if (ret != MqttReasonCode.Success)
{
    Debug.WriteLine($"ERROR connecting: {ret}");
    mqtt.Disconnect();
    return;
}
```

Note: in both examples, a specific certificate is needed to connect to the Mosquitto server. You will find it in the [sample](https://github.com/nanoframework/nanoFramework.m2mqtt/tree/main/TestMqtt/TestAppv5.0). The v5.0 flow for authentication may be more complex and [is supported as well](https://github.com/nanoframework/nanoFramework.m2mqtt#v50-specific-authentication-flow).

### Subscribing to events

The MqttClient supports subscribing to events. For example, you can get additional information when a connection is opened with the v5.0 protocol. The example below shows how to connect to Azure IoT Hub over MQTT v5.0.

```csharp
// Create the client
MqttClient mqtt = new MqttClient(IoTHub, 8883, true, new X509Certificate(CertAzure), null, MqttSslProtocols.TLSv1_2);
// Setup the version
mqtt.ProtocolVersion = MqttProtocolVersion.Version_5;
// Register to events
mqtt.ConnectionOpened += MqttConnectionOpened;
// You can add additional properties
var at = DateTime.UtcNow;
var atString = (at.ToUnixTimeSeconds() * 1000).ToString();
var expiry = at.AddMinutes(40);
var expiryString = (expiry.ToUnixTimeSeconds() * 1000).ToString();
string toSign = $"{IoTHub}\n{DeviceID}\n\n{atString}\n{expiryString}\n";
var hmac = new HMACSHA256(Convert.FromBase64String(Sas));
var sas = hmac.ComputeHash(Encoding.UTF8.GetBytes(toSign));
mqtt.AuthenticationMethod = "SAS";
mqtt.AuthenticationData = sas;
mqtt.UserProperties.Add(new UserProperty("sas-at", atString));
mqtt.UserProperties.Add(new UserProperty("sas-expiry", expiryString));
mqtt.UserProperties.Add(new UserProperty("api-version", "2020-10-01-preview"));
mqtt.UserProperties.Add(new UserProperty("host", IoTHub));
var ret = mqtt.Connect(DeviceID, null, null, false, MqttQoSLevel.AtLeastOnce, false, null, null, true, 60);
// You will have more code here

private static void MqttConnectionOpened(object sender, ConnectionOpenedEventArgs e)
{
    Debug.WriteLine($"Connection open");
    Debug.WriteLine($"  ClientID: {((MqttClient)sender).ClientId}");
    Debug.WriteLine($"  Assigned client id: {e.Message.AssignedClientIdentifier}");
    if (e.Message.AuthenticationData != null) Debug.WriteLine($"  Auth data length: {e.Message.AuthenticationData.Length}");
    Debug.WriteLine($"  Auth method: {e.Message.AuthenticationMethod}");
    Debug.WriteLine($"  Dup flag: {e.Message.DupFlag}");
    Debug.WriteLine($"  Max packet size: {e.Message.MaximumPacketSize}");
    Debug.WriteLine($"  Max QoS: {e.Message.MaximumQoS}");
    Debug.WriteLine($"  Msg ID: {e.Message.MessageId}");
    Debug.WriteLine($"  Qos level: {e.Message.QosLevel}");
    Debug.WriteLine($"  Reason: {e.Message.Reason}");
    Debug.WriteLine($"  Receive max: {e.Message.ReceiveMaximum}");
    Debug.WriteLine($"  Rep info: {e.Message.ResponseInformation}");
    Debug.WriteLine($"  Retain: {e.Message.Retain}");
    Debug.WriteLine($"  Retain available: {e.Message.RetainAvailable}");
    Debug.WriteLine($"  Return code: {e.Message.ReturnCode}");
    Debug.WriteLine($"  Server keep alive: {e.Message.ServerKeepAlive}");
    Debug.WriteLine($"  Server ref: {e.Message.ServerReference}");
    Debug.WriteLine($"  Session exp inter: {e.Message.SessionExpiryInterval}");
    Debug.WriteLine($"  Session present: {e.Message.SessionPresent}");
    Debug.WriteLine($"  Shared subs available: {e.Message.SharedSubscriptionAvailable}");
    Debug.WriteLine($"  Shared identifier available: {e.Message.SubscriptionIdentifiersAvailable}");
    Debug.WriteLine($"  Topic alias max: {e.Message.TopicAliasMaximum}");
    Debug.WriteLine($"  Num user props: {e.Message.UserProperties.Count}");
    foreach (UserProperty prop in e.Message.UserProperties)
    {
        Debug.WriteLine($"    Key  : {prop.Name}");
        Debug.WriteLine($"    Value: {prop.Value}");
    }

    Debug.WriteLine($"  Wildcard available: {e.Message.WildcardSubscriptionAvailable}");
}
```

### Example

The M2Mqtt library provides the main class `MqttClient` that represents the MQTT client to connect to a broker. You can connect to the broker by providing its IP address or hostname and optionally some parameters related to MQTT protocol.

After connecting to the broker, use the `Publish()` method to publish a message to a topic and `Subscribe()` method to subscribe to a topic and receive messages published on it.

The `MqttClient` class is event-based, you receive an event when a message is published to a topic you subscribed to. You can receive events when message publishing is complete, and when subscribing or unsubscribing to topics.

Following is an example of client subscribing to a topic:

```csharp
string MQTT_BROKER_ADDRESS = "192.168.1.2";
// create client instance
MqttClient client = new MqttClient(IPAddress.Parse(MQTT_BROKER_ADDRESS));

// register to message received
client.MqttMsgPublishReceived += client_MqttMsgPublishReceived;

string clientId = Guid.NewGuid().ToString();
client.Connect(clientId);

// subscribe to the topic "/home/temperature" with QoS 2
client.Subscribe(new string[] { "/home/temperature" }, new MqttQoSLevel[] { MqttMsgBase.ExactlyOnce });

// You can add some code here

static void client_MqttMsgPublishReceived(object sender, MqttMsgPublishEventArgs e)
{
// handle message received
}
```

Following an example of client publisher to a topic :

```csharp
string MQTT_BROKER_ADDRESS = "192.168.1.2";
// create client instance
MqttClient client = new MqttClient(IPAddress.Parse(MQTT_BROKER_ADDRESS));

string clientId = Guid.NewGuid().ToString();
client.Connect(clientId);

string strValue = Convert.ToString(value);

// publish a message on "/home/temperature" topic with QoS 2
client.Publish("/home/temperature", Encoding.UTF8.GetBytes(strValue), MqttQoSLevel.ExactlyOnce, false);

// More code goes here
```

### Avoiding certificate check

In some cases, it can be handy to avoid the certificate checks when connecting over a TLS connection. While this scenario is **not** recommended, you can adjust for it like this:

```csharp
// You can specify no certificate at all
MqttClient mqtt = new MqttClient(IoTHub, 8883, true, null, null, MqttSslProtocols.TLSv1_2);
// And you have to setup the ValidateServerCertificate to false
mqtt.Settings.ValidateServerCertificate = false;
string clientId = Guid.NewGuid().ToString();
client.Connect(clientId);
```

## WebSockets and SignalR

WebSockets and SignalR are supported. We do have a set of sample packs for all of them. 

WebSockets can be used as a client, a server, or both at the same time. You'll find the source in the .NET nanoFramework [WebSockets](https://github.com/nanoframework/System.Net.WebSockets) and [SignalR](https://github.com/nanoframework/nanoFramework.SignalR.Client) repositories.

### WebSockets Server Sample

[Server.RgbSample](https://github.com/nanoframework/Samples/tree/main/samples/WebSockets/WebSockets.Server.RgbSample) shows how to use WebSocket Server with a WebServer hosting a WebApp that controls the RGB led on an Atom Lite ESP32.

### WebSockets Client Sample

[Client.Sample](https://github.com/nanoframework/Samples/tree/main/samples/WebSockets/Websockets.ServerClient.Sample) shows how to use the WebSocket Client.

### WebSockets Server and Client sample

[ServerClient.Sample](https://github.com/nanoframework/Samples/tree/main/samples/WebSockets/Websockets.ServerClient.Sample) shows how to configure and start a WebSocket Server and (SSL) Client.

The SignalR Client library enables you to connect your .net nanoFramework device to a SignalR Hub.  SignalR is part of the ASP.NET Framework that makes it easy to create web applications that update in real-time. For IoT apps, SignalR can be used to create a web app to display a live graph of connected smart meters, or perhaps control a robot arm.

Important: You must be connected to a network with a valid IP address. Please check the examples with the Network Helpers on how to set this up.

### Connecting to a SignalR hub

Create a `HubConnection` client to establish a connection to a SignalR hub. You have to set the hub URL upon initialization of the HubConnection. You can also set custom headers by adding `ClientWebsocketHeaders` and set extra options by adding `HubConnectionOptions` upon initialization. The options are mainly used to change the settings of the underlying WebSocket and to set extra SSL options.
Start the connection by calling `Start`.

```csharp
using System;
using System.Diagnostics;
using System.Threading;
using nanoFramework.SignalR.Client;

namespace NFSignalrTestClient
{
    public class Program
    {
        public static void Main()
        {
            //setup connection
            var options = new HubConnectionOptions() { Reconnect = true };
            HubConnection hubConnection = new HubConnection("http://YourSignalrTestServer/testhub", options: options);

            hubConnection.Closed += HubConnection_Closed;

            hubConnection.On("ReceiveMessage", new Type[] { typeof(string), typeof(string) }, (sender, args) =>
            {
                var name = (string)args[0];
                var message = (string)args[1];

                Console.WriteLine($"{name} : {message}");
            });

            //start connection
            hubConnection.Start();


            AsyncResult dashboardClientConnected = hubConnection.InvokeCoreAsync("AwaitCientConnected", typeof(bool), new object[] { }, -1);

            int seconds = 0;

            while (!dashboardClientConnected.Completed)
            {
                Debug.WriteLine($"Waited {seconds} for client to open webapp");
                seconds++;
                Thread.Sleep(1000);
            }

            if ((bool)dashboardClientConnected.Value)
            {
                hubConnection.SendCore("ReportStatus", new object[] { "Client Connected" });

                int count = 0;
                while (hubConnection.State == HubConnectionState.Connected)
                {
                    hubConnection.InvokeCore("SendMessage", null, new object[] { count, "this is a control message" });
                    count++;
                    Thread.Sleep(1000);
                }
            }
            else
            {
                hubConnection.Stop("client failed to connect");
            }
        }

        private static void HubConnection_Closed(object sender, SignalrEventMessageArgs message)
        {
            Debug.WriteLine($"closed received with message: {message.Message}");
        }
    }
}
```

### Handling lost SignalR connections

Use retry policies to handle lost connections to a SignalR hub. To get the connection state, create an AsyncResult object and call methods to check the connection state.

The `AsyncResult` monitors the return message of the hub method. Upon completion, `Completed` will be true. Upon completion, the `Value` will hold the return object that needs to be cast to the right type. Calling `Value` before completion will result in the awaiting of the server return. If an error occurs, `Error` will be true and the error message will be inside `ErrorMessage`.

```csharp
AsyncResult dashboardClientConnected = hubConnection.InvokeCoreAsync("AwaitCientConnected", typeof(bool), new object[] { }, -1);

int seconds = 0;

while (!dashboardClientConnected.Completed)
{
    Debug.WriteLine($"Waited {seconds} for client to open webapp");
    seconds++;
    Thread.Sleep(1000);
}

if ((bool)dashboardClientConnected.Value)
{
    Debug.WriteLine("The client connected to the dashboard, start sending live data");
}
```

### Call client methods from a Signalr hub

Define the method the hub calls using connection.On after building, but before starting the connection.

```csharp
connection.On<string, string>("ReceiveMessage", (sender, args) =>
{
    var name = args[0] as string;
    var message = args[1] as string;

    Debug.WriteLine($"{name} : {message}");
});
```

The preceding code in connection.On runs when server-side code calls it using the SendAsync method.

```csharp
public async Task SendMessage(string user, string message)
{
    await Clients.All.SendAsync("ReceiveMessage", user, message);
}
```

## Azure library: all you need is there!

You'll find the source in the .NET nanoFramework [Azure IoT library](https://github.com/nanoframework/nanoFramework.Azure.Devices) repository.

**Important**: You **must** be connected to a network with a valid IP address and date/time. Check the Network Helpers examples for information on IP addresses and syncing date and time.

The .NET nanoFramework Azure IoT Hub library uses the MQTT protocol. You need to ensure you can connect to port 8883 using TLS protocol. If you are connected to an enterprise network, this may be blocked. In most cases, this is not an issue.

To aid portability, the .NET nanoFramework Azure IoT Hub library aims to match the namespaces, class, and method names found in the full .NET C# Azure IoT SDK.

### Certificates

There are two options to provide an Azure IoT TLS certificate:

- Parse it [into the constructor](https://github.com/nanoframework/nanoFramework.Azure.Devices/blob/main/README.md#through-the-constructor)
- Store it [on the device](https://github.com/nanoframework/nanoFramework.Azure.Devices/blob/main/README.md#storing-the-certificate-on-the-device)

The [AzureCertificates](https://github.com/nanoframework/nanoFramework.Azure.Devices/tree/main/AzureCertificates) contains, for your convenience, the root certificate used to connect to Azure IoT. Starting from June 2022, the Digicert Global Root 2 certificate must be used. For more information, refer to the [Azure IoT TLS: Critical changes are almost here! (…and why you should care)](https://techcommunity.microsoft.com/t5/internet-of-things/azure-iot-tls-critical-changes-are-almost-here-and-why-you/ba-p/2393169) article.

### Creating a DeviceClient

You can connect to Azure IoT Hub using either a symmetric Key or a certificate. The following example shows how to use a symmetric key:

```csharp
const string DeviceID = "nanoEdgeTwin";
const string IotBrokerAddress = "youriothub.azure-devices.net";
const string SasKey = "yoursaskey";
DeviceClient azureIoT = new DeviceClient(IotBrokerAddress, DeviceID, SasKey);
```

Note: please see the previous section to understand how to better parse the certificate for your usage. The example shows the certificate uploaded into the device and not in the code.

### Azure IoT Plug&Play

Azure IoT Plug&Play is supported, to use, provide a model ID when creating the DeviceClient:

```csharp
DeviceClient azureIoT = new DeviceClient(IotBrokerAddress, DeviceID, SasKey, modelID:"dtmi:com:example:Thermostat;1");
```

#### IoT Plug&Play property updates

The following example shows how to subscribe to property updates.

```csharp
const string TargetTemperature = "targetTemperature";
DeviceClient azureIoT = new DeviceClient(Secrets.IotHub, Secrets.DeviceName, Secrets.SasKey, azureCert: new X509Certificate(Resource.GetBytes(Resource.BinaryResources.AzureRoot)), modelId: "dtmi:com:example:Thermostat;1");
azureIoT.TwinUpdated += AzureTwinUpdated;
azureIoT.Open();

void AzureTwinUpdated(object sender, TwinUpdateEventArgs e)
{
    if (e.Twin.Contains(TargetTemperature))
    {
        // We got an update for the target temperature
        var target = e.Twin[TargetTemperature];
        Debug.WriteLine($"Target temperature updated: {target}");
        PropertyAcknowledge targetReport = new() { Version = (int)e.Twin.Version, Status = PropertyStatus.Completed, Description = "All perfect", Value = target };
        TwinCollection twin = new TwinCollection();
        twin.Add(TargetTemperature, targetReport.BuildAcknowledge());
        azureIoT.UpdateReportedProperties(twin);
    }
}
```

In this example, the property we are interested in is called `targetTemperature`. To receive updates, we subscribe to twin updates. We get the twin value from a call to the `e.Twin[TargetTemperature]` method.

The pattern to publish a writable property is simple, just build a `PropertyAcknowledge` object, create a TwinCollection, and add the property name, in this case, `targetTemperature`.

You can add more than one property. Note that you add to the TwinCollection, once done, just ask the library to update the twin through the `UpdateReportedProperties` method.

#### Receiving IoT Plug&Play commands

An IoT Plug & Play command is a method callback. The following example shows how to map an IoT Play & Play command to a C# method. The method is called `getMaxMinReport`, the name of the C# method **must** match the command name as defined in the DTDL file.

```csharp
DeviceClient azureIoT = new DeviceClient(Secrets.IotHub, Secrets.DeviceName, Secrets.SasKey, azureCert: new X509Certificate(Resource.GetBytes(Resource.BinaryResources.AzureRoot)), modelId: "dtmi:com:example:Thermostat;1");
azureIoT.AddMethodCallback(getMaxMinReport);
azureIoT.Open();

string getMaxMinReport(int rid, string payload)
{
    TemperatureReporting reporting = new() { avgTemp = 20, maxTemp = 42, minTemp = 12.34, startTime = DateTime.UtcNow.AddDays(-10), endTime = DateTime.UtcNow };
    return JsonConvert.SerializeObject(reporting);
}
```

In this example, the expected result is an object. Just populate the object and serialize it as a JSON as the command expect and return it. If any parameter to this command, it will be in the payload.

### Getting and updating Twin

You can request the state of a Azure IoT Twin by calling the `GetTwin` method.

```csharp
var twin = azureIoT.GetTwin(new CancellationTokenSource(20000).Token);
if (twin == null)
{
    Debug.WriteLine($"Can't get the twins");
    azureIoT.Close();
    return;
}

Debug.WriteLine($"Twin DeviceID: {twin.DeviceId}, #desired: {twin.Properties.Desired.Count}, #reported: {twin.Properties.Reported.Count}");
```

Note: it's important to use a `CancellationToken` that will be canceled after a certain amount of time. Otherwise, this will block the calling thread up to the point the twin is received.

Twins have properties, reported and desired. They are collections and you can get or try to get any element.

You can report your Twin as simple as this:

```csharp
TwinCollection reported = new TwinCollection();
reported.Add("firmware", "myNano");
reported.Add("sdk", 0.2);
azureIoT.UpdateReportedProperties(reported);
```

You also have the option to wait for the twin update confirmation, in this case, use a `CancellationToken` that can be canceled. Otherwise, the check will be ignored.

Note: the function will return false if the twin reception confirmation is not checked or if it did not arrive on time.

You can also register for any twin update:

```csharp
azureIoT.TwinUpdated += TwinUpdatedEvent;

void TwinUpdatedEvent(object sender, TwinUpdateEventArgs e)
{
    Debug.WriteLine($"Twin update received: {e.Twin.Count}");
}
```

### Sending message

Use the `SendMessage` function to send messages to Azure IoT. Use a `CancellationToken` to ensure message delivery. If a CancellationToken is not provided, then delivery assurance will be ignored and the function will return false.

```csharp
var isReceived = azureIoT.SendMessage($"{{\"Temperature\":42,\"Pressure\":1024}}", new CancellationTokenSource(5000).Token);
Debug.WriteLine($"Message received by IoT Hub: {isReceived}");
```

Note: The message will be sent with the default service quality of service you created the device with. You won't get any answer for the quality `0`. In this case, you can simplify it to:

```csharp
azureIoT.SendMessage($"{{\"Temperature\":42,\"Pressure\":1024}}");
```

### Cloud to device messages

You can register an event to receive Cloud to device messages:

```csharp
azureIoT.CloudToDeviceMessage += CloudToDeviceMessageEvent;

// The following example shows how to display all keys in debug
void CloudToDeviceMessageEvent(object sender, CloudToDeviceMessageEventArgs e)
{
    Debug.WriteLine($"Message arrived: {e.Message}");
    foreach (string key in e.Properties.Keys)
    {
        Debug.Write($"  Key: {key} = ");
        if (e.Properties[key] == null)
        {
            Debug.WriteLine("null");
        }
        else
        {
            Debug.WriteLine((string)e.Properties[key]);
        }
    }

    // e.Message contains the message itself
    if(e.Message == "stop")
    {
        ShoudIStop = true;
    }
}
```

Note: the `sender` is a `DeviceClient` class, you can then send a confirmation message back, or execute any logic you've put in place.

### Method callback

Method callback is supported as well. You can register and unregister your methods. Here are a few examples:

```csharp
azureIoT.AddMethodCallback(MethodCallbackTest);
azureIoT.AddMethodCallback(MakeAddition);
azureIoT.AddMethodCallback(RaiseExceptionCallbackTest);

string MethodCallbackTest(int rid, string payload)
{
    Debug.WriteLine($"Call back called :-) rid={rid}, payload={payload}");
    return "{\"Yes\":\"baby\",\"itisworking\":42}";
}

string MakeAddition(int rid, string payload)
{
    Hashtable variables = (Hashtable)JsonConvert.DeserializeObject(payload, typeof(Hashtable));
    int arg1 = (int)variables["arg1"];
    int arg2 = (int)variables["arg2"];
    return $"{{\"result\":{arg1 + arg2}}}";
}

string RaiseExceptionCallbackTest(int rid, string payload)
{
    // This will properly return as well the exception error
    throw new Exception("I got you, it's to test the 504");
}
```

> **Important**: method names are case-sensitive. So make sure you name your functions in C# using the same case.

### Status update event

A status update event is available:

```csharp
azureIoT.StatusUpdated += StatusUpdatedEvent;

void StatusUpdatedEvent(object sender, StatusUpdatedEventArgs e)
{
    Debug.WriteLine($"Status changed: {e.IoTHubStatus.Status}, {e.IoTHubStatus.Message}");
    // You may want to reconnect or use a similar retry mechanism
    ////if (e.IoTHubStatus.Status == Status.Disconnected)
    ////{
    ////    mqtt.Open();
    ////}
}
```

Note that those are status change based, so once the connect or disconnect event arrives, they'll be replaced by other events as soon as something else happened like receiving a twin.

### QoS Level

By default, connections to an IoT Hub use QoS 1 for message exchange with the IoT hub. You can change this by setting the `qosLevel` argument of the `DeviceClient` constructor.

Here are existing QoS levels that you can use:

* AtMostOnce: The broker/client will deliver the message once, with no confirmation.
* AtLeastOnce: The broker/client will deliver the message at least once, with confirmation required.
* ExactlyOnce: The broker/client will deliver the message exactly once by using a four-step handshake.

While it's possible to configure QoS 0 (AtMostOnce) for faster message exchange, you should note that the delivery isn't guaranteed nor acknowledged. For this reason, QoS 0 is often referred as "fire and forget".

### Module support

Modules are supported, you will have to use the constructor to pass the module ID either with a SAS token or with a certificate. The rest works like a normal device. Everything is supported including module direct method, telemetry and twins!

For example here with a SAS token. Note that the certificates are fully supported as well. And if you are not storing the Azure root certificate on the device, you'll need to pass it to the constructor.

```csharp
const string DeviceID = "nanoEdgeTwin";
const string ModuleID = "myModule";
const string IotBrokerAddress = "youriothub.azure-devices.net";
const string SasKey = "yoursaskey";
DeviceClient module = new DeviceClient(IotBrokerAddress, DeviceID, ModuleID, SasKey);
```

### Azure IoT Device Provisioning Service (DPS) support

This SDK also supports the Azure IoT Device Provisioning Service. Group and individual provisioning scenarios are supported either with a symmetric key or with certificates. To understand the mechanism behind DPS, it is recommended to read the [documentation](https://docs.microsoft.com/azure/iot-dps/).

### Provisioning using symmetric key

For symmetric key provisioning you only need the following elements:

- A registration ID
- The ID Scope
- The device name
- The key or the derived key for group provisioning

The code is then straight forward:

```csharp
const string RegistrationID = "nanoDPStTest";
const string DpsAddress = "global.azure-devices-provisioning.net";
const string IdScope = "0ne01234567";
const string SasKey = "alongkeyencodedbase64";

// See the previous sections in the SDK help, you either need to have the Azure certificate embedded
// Either passing it in the constructor
X509Certificate azureCA = new X509Certificate(DpsSampleApp.Resources.GetBytes(DpsSampleApp.Resources.BinaryResources.BaltimoreRootCA_crt));
var provisioning = ProvisioningDeviceClient.Create(DpsAddress, IdScope, RegistrationID, SasKey, azureCA);
var myDevice = provisioning.Register(new CancellationTokenSource(60000).Token);

if(myDevice.Status != ProvisioningRegistrationStatusType.Assigned)
{
    Debug.WriteLine($"Registration is not assigned: {myDevice.Status}, error message: {myDevice.ErrorMessage}");
    return;
}

// You can then create the device
var device = new DeviceClient(myDevice.AssignedHub, myDevice.DeviceId, SasKey, nanoFramework.M2Mqtt.Messages.MqttQoSLevel.AtLeastOnce, azureCA);
// Open it and continue like for the previous sections
var res = device.Open();
if(!res)
{
    Debug.WriteLine($"can't open the device");
    return;
}
```

In case a [DPS model](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v2/dtdlv2.md) is going to be used, the ID of the model has to be passed to the ProvisioningDeviceClient and DeviceClient constructor.
The code above requires the following changes.

Add the model ID as a constant:

```csharp
public const string ModelId = "dtmi:orgpal:palthree:palthree_demo_0;1";

```

Create the additional payload information with the model ID to be sent along with the registration with DPS and pass that to the call to `Register()`.

```csharp
var pnpPayload = new ProvisioningRegistrationAdditionalData
{
    JsonData = PnpConvention.CreateDpsPayload(ModelId),
};

var myDevice = provisioning.Register(pnpPayload, new CancellationTokenSource(60000).Token);

```

Create the device client passing the model ID to the respective parameter in the constructor.

```csharp
var device = new DeviceClient(myDevice.AssignedHub, myDevice.DeviceId, SasKey, nanoFramework.M2Mqtt.Messages.MqttQoSLevel.AtLeastOnce, azureCA, ModelId);
```

Note: like for the `DeviceClient` you need to make sure you are connected to a network properly and also have the date and time set on the device.

Provisioning using certificates is supported as well and [described here](https://github.com/nanoframework/nanoFramework.Azure.Devices#provisioning-using-certificates).

### Additional payload

Additional payload is supported as well. You can set it as a JSON string in the `ProvisioningRegistrationAdditionalData` class when calling the `Register` function. When the device has been provisioned, you may have as well additional payload provided.

## Running on battery for 8 years and connecting to Azure

One of the advantages of MCU is their low consumption and ability to deep sleep very long even when connecting to Azure. You'll find a full article describing some of the secrets [here](https://devblogs.microsoft.com/dotnet/show-dotnet-running-my-net-nanoframework-for-8-years-on-a-battery/).

## Conclusion

In this (long) article, we hope we have demonstrated **all** you need to connect your MCU using .NET nanoFramework to almost anything! As a recap, here are the repositories related to networking in .NET nanoFramework:

* [TcpClient](https://github.com/nanoframework/System.Net.Sockets.TcpClient),
* [UdpClient](https://github.com/nanoframework/System.Net.Sockets.UdpClient),
* [System.Net.Http](https://github.com/nanoframework/System.Net.Http),
* [WebServer](https://github.com/nanoframework/nanoFramework.WebServer),
* [WebSockets](https://github.com/nanoframework/System.Net.WebSockets),
* [SignalR](https://github.com/nanoframework/nanoFramework.SignalR.Client),
* [AMQP](https://github.com/nanoframework/amqpnetlite),
* [MQTT](https://github.com/nanoframework/nanoFramework.m2mqtt),
* [Azure IoT library](https://github.com/nanoframework/nanoFramework.Azure.Devices),
* And of course, the Sample pack related to [networking](https://github.com/nanoframework/Samples#networking-including-http-ssl), [MQTT](https://github.com/nanoframework/Samples#mqtt), [AMQP](https://github.com/nanoframework/Samples#amqp), and [Azure](https://github.com/nanoframework/Samples#azure-specific)

Next Friday, we'll see an advanced scenario: rebuilding fully a .NET nanoFramework image and including native C interoperability. Stay tuned! And as always, feedback is welcome!
