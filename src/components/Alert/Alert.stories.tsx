import React from 'react'
import Alert, { AlertType, AlertSize } from './Alert';

export default {title: "Alert"}

export const error = () => <Alert type={AlertType.Error} size={AlertSize.Basic} message="Error message"/>
export const info = () => <Alert type={AlertType.Info} size={AlertSize.Basic} message="Info message"/>
export const success = () => <Alert type={AlertType.Success} size={AlertSize.Basic} message="Success message"/>
export const warning = () => <Alert type={AlertType.Warning} size={AlertSize.Basic} message="Warning message"/>