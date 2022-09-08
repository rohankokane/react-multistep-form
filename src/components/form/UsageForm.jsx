import { RiTeamFill } from 'react-icons/ri'
import { BsFillPersonFill } from 'react-icons/bs'

export const UsageForm = ({ usage, handleFormSubmit }) => {
	return (
		<div className='form__container'>
			<h2 className='form__heading'>How are you planning to use Eden?</h2>
			<p className='form__helperText'>We'll streamline your setup experience accordingly.</p>
			<form className='form' onSubmit={handleFormSubmit}>
				<div className='input__tile-group'>
					<div className='input__tile-container'>
						<input
							type='radio'
							id='myself'
							className='input__tile-radio'
							name='usage'
							value='myself'
							defaultChecked={usage === 'myself'}
						/>
						<div className='input__tile'>
							<BsFillPersonFill className='input__tile-icon' />
							<h4 className='input__tile-label'>For myself</h4>
							<p className='input__tile-desc'>Write better. Think more clearly. Stay organized.</p>
						</div>
					</div>
					<div className='input__tile-container'>
						<input
							type='radio'
							id='team'
							className='input__tile-radio'
							name='usage'
							value='team'
							defaultChecked={usage === 'team'}
						/>
						<div className='input__tile'>
							<RiTeamFill className='input__tile-icon' />
							<h4 className='input__tile-label'>With my team</h4>
							<p className='input__tile-desc'>Wikis, docs, tasks & projects, all in one place.</p>
						</div>
					</div>
				</div>
				<button className='form__button' type='submit'>
					Create Workspace
				</button>
			</form>
		</div>
	)
}
