import React from 'react'
import { Alert } from 'antd';

export default function Errors({ message }) {
	return (
		<Alert message={message} type="error" />
	)
}