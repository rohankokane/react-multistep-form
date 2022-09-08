export const NameForm = ({ fullName, displayName, handleFormSubmit }) => {
	return (
		<div className='form__container'>
			<h2 className='form__heading'>Welcome! First things first...</h2>
			<p className='form__helperText'>You can always change the name later.</p>
			<form className='form' onSubmit={handleFormSubmit}>
				<label className='input__label' htmlFor='fullName'>
					Full Name
				</label>
				<input
					className='input__field'
					type='text'
					id='fullName'
					name='fullName'
					placeholder='Enter your full name'
					defaultValue={fullName}
				/>
				<label className='input__label' htmlFor='displayName'>
					Display Name
				</label>
				<input
					className='input__field'
					type='text'
					id='displayName'
					name='displayName'
					placeholder='Enter display name'
					defaultValue={displayName}
				/>
				<button className='form__button' type='submit'>
					Create Workspace
				</button>
			</form>
		</div>
	)
}
