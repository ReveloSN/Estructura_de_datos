class TemperatureMonitor {

    private queue: number[] = [];

    addTemperature(temp: number): void {

        this.queue.push(temp);

        this.updateQueueView();

        this.addLog("Temperature added: " + temp + " °C");
    }

    processTemperature(): void {

        if (this.queue.length === 0) {

            this.addLog("No temperatures to process");

            return;
        }

        const temp = this.queue.shift();

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

    }

    updateQueueView(): void {

        const element = document.getElementById("queueStatus");

        if (element !== null) {

            if (this.queue.length === 0) {

                element.innerHTML = "Empty";

            }
            else {

                element.innerHTML = this.queue.join(", ");

            }

        }

    }

    addLog(message: string): void {

        const element = document.getElementById("log");

        if (element !== null) {

            element.innerHTML += message + "<br>";

        }

    }

}

const monitor = new TemperatureMonitor();

function addTemperature(): void {

    const input = document.getElementById("temperatureInput") as HTMLInputElement;

    const temp = Number(input.value);

    if (!isNaN(temp)) {

        monitor.addTemperature(temp);

    }

    input.value = "";

}

function processTemperature(): void {

    monitor.processTemperature();

}