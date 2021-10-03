import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
	selector: 'app-temperature-converter',
	templateUrl: './temperature-converter.component.html',
	styleUrls: ['./temperature-converter.component.sass']
})
export class TemperatureConverterComponent implements OnInit {

	temperatureForm: FormGroup = new FormGroup({
		"celsius": new FormControl(''),
		"fahrenheit": new FormControl('')
	});

	constructor() { }

	ngOnInit(): void {

		this.temperatureForm.controls["celsius"].valueChanges
			.subscribe((val) => {
				this.celsiusToFahreinheit(val);
			})

		this.temperatureForm.controls["fahrenheit"].valueChanges
			.subscribe((val) => {
				this.fahreinheitToCelsius(val);
			})
	}

	public celsiusToFahreinheit(value: number) {
		console.log("value = " + value);
		let fah = (value * 9 / 5) + 32;
		this.temperatureForm.controls["fahrenheit"].setValue(fah, { emitEvent: false });
	}

	public fahreinheitToCelsius(value: number) {
		console.log("value = " + value);
		let cel = (value - 32) * 5 / 9;
		this.temperatureForm.controls["celsius"].setValue(cel, { emitEvent: false } );
	}
}
