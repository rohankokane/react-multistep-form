import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import 'components/form/form.css'
import { Step, Stepper } from 'components/stepper'
import { NameForm } from 'components/form/NameForm'

export const StepperForm = () => {
	const [step, setStep] = useState(0)
	const [prevStep, setPrevStep] = useState(0)
	const handleStepClick = (n) => {
		setPrevStep(step)
		setStep(n)
	}
	const direction = prevStep < step ? 'forward' : 'backward'
	const slide = {
		'--slide-in': `${direction === `forward` ? 'translateX(100%)' : 'translateX(-100%)'}`,
		'--slide-out': `${direction === `forward` ? 'translateX(-100%)' : 'translateX(100%)'}`,
	}

	return (
		<div className='stepper-form-container' style={slide}>
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
			<FormWrapper active={step === 0}>
				<NameForm fullName={'steve'} displayName='ste' />
			</FormWrapper>
			<FormWrapper active={step === 1}>
				<NameForm fullName={'stark'} displayName='tony' />
			</FormWrapper>
			<FormWrapper active={step === 2}>
				<NameForm fullName={'stark'} displayName='tony' />
			</FormWrapper>
			<FormWrapper active={step === 3}>
				<NameForm fullName={'stark'} displayName='tony' />
			</FormWrapper>
		</div>
	)
}

const FormWrapper = ({ active, children }) => {
	return (
		<CSSTransition in={active} timeout={500} classNames='form__container' unmountOnExit>
			{children}
		</CSSTransition>
	)
}
