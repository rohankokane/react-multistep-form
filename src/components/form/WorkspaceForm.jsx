export const WorkspaceForm = ({ workspaceName, workspaceURL }) => {
	return (
		<div className='form__container'>
			<h2 className='form__heading'>Let's set up a home for all your work</h2>
			<p className='form__helperText'>You can always change the name later.</p>
			<form className='form'>
				<label className='input__label' htmlFor='workspaceName'>
					Workspace Name
				</label>
				<input
					className='input__field'
					type='text'
					id='workspaceName'
					name='workspace name'
					placeholder='Enter your workspace name'
					value={workspaceName}
				/>
				<label className='input__label' htmlFor='workspaceURL'>
					Workspace URL
					<span className='input__helper'>(optional)</span>
				</label>
				<div className='input__container'>
					<span className='input__overlap'>www.eden.com/</span>
					<input
						className='input__field input__field--padded'
						type='text'
						id='workspaceURL'
						name='workspace name'
						placeholder='http://google.com'
						value={workspaceURL}
					/>
				</div>
				<button className='form__button' type='submit'>
					Create Workspace
				</button>
			</form>
		</div>
	)
}
