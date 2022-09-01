import { Children, cloneElement } from 'react'
import './stepper.css'
export const Stepper = ({ currentStep = 0, children }) => {
	return (
		<ul className='stepper__container'>
			{Children.map(children, (child, index) => {
				return cloneElement(child, {
					className: `stepper__step stepper__step${index <= currentStep ? '--filled' : '--empty'}`,
					index,
				})
			})}
		</ul>
	)
}

export const Step = (props) => {
	return <li {...props}>{props.index + 1}</li>
}

/*
Stepper
	currentStep
	barVisible
	barAhead
	direction
	activeColor


Step
	onClick

StepLabel
	icon

	*/
