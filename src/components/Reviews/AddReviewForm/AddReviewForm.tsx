import React from 'react'
import styles from './AddReviewForm.module.scss'
import { useForm } from 'react-hook-form'

type PropsType = {}

type FormDataType = {}

export const AddReviewForm: React.FC<PropsType> = () => {
	const { control, formState: { errors } } = useForm();

	const handleubmit = (data: FormDataType) => {

	}

	return (
		<form>
			
		</form>
	)
}
