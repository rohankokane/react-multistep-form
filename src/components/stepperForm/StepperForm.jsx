import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Step, Stepper } from 'components/stepper'
import { NameForm, UsageForm, WorkspaceForm } from 'components/form'
import { CompletionScreen } from './CompletionScreen'
import 'components/form/form.css'

const defaultState = {
	fullName: '',
	displayName: '',
	workspaceName: '',
	workspaceUrl: '',
	usage: '',
}

const validateForm = (state, n) => {
	if (n === 0) return state.fullName && state.displayName
	else if (n === 1) return state.workspaceName && state.workspaceUrl
	else if (n === 2) return Boolean(state.usage)
}

export const StepperForm = () => {
	const [step, setStep] = useState(0)
	const [prevStep, setPrevStep] = useState(0)
	const [formState, setFormState] = useState(defaultState)

	const handleStepClick = (n) => {
		if (!Math.abs(n - step) === 1) return
		if (n - step > 0 && !validateForm(formState, step)) return
		setPrevStep(step)
		setStep(n)
	}
	const handleFormSubmit = (e) => {
		e.preventDefault()
		const formElements = { ...e.target.elements }
		const newState = { ...formState }
		for (let key in defaultState) {
			if (formElements[key]?.value) newState[key] = formElements[key].value
		}
		if (!validateForm(newState, step)) return
		setFormState(newState)
		setPrevStep(step)
		setStep(step + 1)
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
					/>
				))}
			</Stepper>
			<FormWrapper active={step === 0}>
				<NameForm
					fullName={formState.fullName}
					displayName={formState.displayName}
					handleFormSubmit={handleFormSubmit}
				/>
			</FormWrapper>
			<FormWrapper active={step === 1}>
				<WorkspaceForm
					workspaceName={formState.workspaceName}
					workspaceUrl={formState.workspaceUrl}
					handleFormSubmit={handleFormSubmit}
				/>
			</FormWrapper>
			<FormWrapper active={step === 2}>
				<UsageForm usage={formState.usage} handleFormSubmit={handleFormSubmit} />
			</FormWrapper>
			<FormWrapper active={step === 3}>
				<CompletionScreen displayName={formState.displayName} />
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
