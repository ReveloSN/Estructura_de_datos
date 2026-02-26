var TemperatureMonitor = /** @class */ (function () {
    function TemperatureMonitor() {
        this.queue = [];
    }
    TemperatureMonitor.prototype.addTemperature = function (temp) {
        this.queue.push(temp);
        this.updateQueueView();
        this.addLog("Temperature added: " + temp + " °C");
    };
    TemperatureMonitor.prototype.processTemperature = function () {
        if (this.queue.length === 0) {
            this.addLog("No temperatures to process");
            return;
        }
        var temp = this.queue.shift();
        if (temp !== undefined) {
            if (temp < 2) {
                this.addLog("ALERT: Temperature too low: " + temp + " °C");
            }
            else if (temp > 8) {
                this.addLog("ALERT: Temperature too high: " + temp + " °C");
            }
            else {
                this.addLog("Temperature OK: " + temp + " °C");
            }
        }
        this.updateQueueView();
    };
    TemperatureMonitor.prototype.updateQueueView = function () {
        var element = document.getElementById("queueStatus");
        if (element !== null) {
            if (this.queue.length === 0) {
                element.innerHTML = "Empty";
            }
            else {
                element.innerHTML = this.queue.join(", ");
            }
        }
    };
    TemperatureMonitor.prototype.addLog = function (message) {
        var element = document.getElementById("log");
        if (element !== null) {
            element.innerHTML += message + "<br>";
        }
    };
    return TemperatureMonitor;
}());
var monitor = new TemperatureMonitor();
function addTemperature() {
    var input = document.getElementById("temperatureInput");
    var temp = Number(input.value);
    if (!isNaN(temp)) {
        monitor.addTemperature(temp);
    }
    input.value = "";
}
function processTemperature() {
    monitor.processTemperature();
}
