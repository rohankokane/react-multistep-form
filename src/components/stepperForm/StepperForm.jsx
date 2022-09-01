import { NameForm } from 'components/form/NameForm'
import { Step, Stepper } from 'components/stepper'
import { useState } from 'react'
import 'components/form/form.css'

export const StepperForm = () => {
	const [step, setStep] = useState(0)
	const handleStepClick = (n) => {
		setStep(n)
	}
	return (
		<div>
			<Stepper currentStep={step}>
				{[...new Array(4)].map((_, i) => (
					<Step
						key={i}
						onClick={() => {
							handleStepClick(i)
						}}
					></Step>
				))}
			</Stepper>
			<NameForm fullName={'steve'} displayName='ste' />
		</div>
	)
}
