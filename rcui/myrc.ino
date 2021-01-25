#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ESPmDNS.h>

const int TXLED = 13; // The TX LED has a defined Arduino pin

#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>

IRsend irsend(TXLED);  // Set the GPIO to be used to sending the message.


const char *ssid = "MY WIFI ESSID";
const char *password = "MY WIFI PASSWORD";

WebServer server(80);

const int led = 2; // built in LED on ESP32


void handleRoot() {
  digitalWrite(led, 1);
  char temp[400];
  int sec = millis() / 1000;
  int min = sec / 60;
  int hr = min / 60;

  snprintf(temp, 400,"Uptime: %02d:%02d:%02d", hr, min % 60, sec % 60);
  server.send(200, "text/plain", temp);
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";

  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }

  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void handleIrSend() {
  unsigned long code = 0UL;
  if (server.args() == 1 && server.argName(0)=="NEC") {
    code = strtoul(server.arg(0).substring(0, 8).c_str(), NULL, 16);
    Serial.print("Sent NEC ir ");
    Serial.println(code);
    irsend.sendNEC(code);
    server.send(200, "text/plain", "Sent NEC ir");
  } else {
    server.send(404, "text/plain", "Invalid");
  }
}

void setup(void) {
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp32")) {
    Serial.println("MDNS responder started");
  }

  server.on("/", handleRoot);
  server.on("/irSend", handleIrSend);
  server.onNotFound(handleNotFound);
  server.begin();
  Serial.println("HTTP server started");
  irsend.begin();
}

void loop(void) {
  server.handleClient();
}
