export const NameForm = ({ fullName, displayName }) => {
	return (
		<div className='form__container'>
			<h2 className='form__heading'>Welcome! First things first...</h2>
			<p className='form__helperText'>You can always change the name later.</p>
			<form className='form'>
				<label className='input__label' htmlFor='fullName'>
					Full Name
				</label>
				<input
					className='input__field'
					type='text'
					id='fullName'
					name='full name'
					placeholder='Enter your full name'
					value={fullName}
				/>
				<label className='input__label' htmlFor='displayName'>
					Display Name
				</label>
				<input
					className='input__field'
					type='text'
					id='displayNamje'
					name='display name'
					placeholder='Enter display name'
					value={displayName}
				/>
				<button className='form__button' type='submit'>
					Create Workspace
				</button>
			</form>
		</div>
	)
}
