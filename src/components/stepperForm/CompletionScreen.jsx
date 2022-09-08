import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

export const CompletionScreen = ({ displayName = '' }) => {
	return (
		<div className='form__container--completion'>
			<BsCheck2 className='form__circle-icon--filled' />
			<h2 className='form__heading'>Congratulations, {displayName}!</h2>
			<p className='form__helperText'>
				You have completed onboarding, you can start using the Eden!
			</p>
			<button className='form__button' type='submit'>
				Launch Eden
			</button>
		</div>
	)
}
