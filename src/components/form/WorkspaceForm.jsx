export const WorkspaceForm = ({ workspaceName, workspaceUrl, handleFormSubmit }) => {
	return (
		<div className='form__container'>
			<h2 className='form__heading'>Let's set up a home for all your work</h2>
			<p className='form__helperText'>You can always change the name later.</p>
			<form className='form' onSubmit={handleFormSubmit}>
				<label className='input__label' htmlFor='workspaceName'>
					Workspace Name
				</label>
				<input
					className='input__field'
					type='text'
					id='workspaceName'
					name='workspaceName'
					placeholder='Enter your workspace name'
					defaultValue={workspaceName}
				/>
				<label className='input__label' htmlFor='workspaceUrl'>
					Workspace URL
					<span className='input__helper'>(optional)</span>
				</label>
				<div className='input__container'>
					<span className='input__overlap'>www.eden.com/</span>
					<input
						className='input__field input__field--padded'
						type='text'
						id='workspaceUrl'
						name='workspaceUrl'
						placeholder='example'
						defaultValue={workspaceUrl}
					/>
				</div>
				<button className='form__button' type='submit'>
					Create Workspace
				</button>
			</form>
		</div>
	)
}
