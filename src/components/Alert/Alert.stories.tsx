import React from 'react'
import Alert, { AlertType, AlertSize } from './Alert';

export default {title: "Alert"}

export const error = () => <Alert type={AlertType.Error} size={AlertSize.Basic}/>
export const info = () => <Alert type={AlertType.Info} size={AlertSize.Basic}/>
export const success = () => <Alert type={AlertType.Success} size={AlertSize.Basic}/>
export const warning = () => <Alert type={AlertType.Warning} size={AlertSize.Basic}/>