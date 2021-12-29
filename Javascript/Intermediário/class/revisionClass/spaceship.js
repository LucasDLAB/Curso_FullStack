class Spaceship {
	constructor (name,crewQuantity){
		this.name = name
		this.crewQuantity = crewQuantity
		this.velocity = 0
	}

  static get deceleration(){
		return 0.17
	}

	speedUp(acceleration) {
		let newVelocity =  this.velocity + (acceleration * (1 - Spaceship.deceleration))
		return newVelocity
	}
}