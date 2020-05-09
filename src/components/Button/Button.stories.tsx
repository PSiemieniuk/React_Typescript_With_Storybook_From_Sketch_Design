import React from 'react';
import Button from './Button'
import { ButtonType, ButtonSize } from './Button.service';

export default {title: "Button"};

export const settingsSmallPrimaryButton = () => <Button text="Settings" size={ButtonSize.Small} />
export const cancelNormalSecondaryButton = () => <Button text="Cancel" size={ButtonSize.Normal} type={ButtonType.Secondary} />
export const saveBigDashedButton = () => <Button text="Save" size={ButtonSize.Big} type={ButtonType.Dashed}/>
export const disabledSaveBigDashedButton = () => <Button text="Save" size={ButtonSize.Big} type={ButtonType.Dashed} disabled={true}/>
export const stopNormalDangerButton = () => <Button text="Stop" size={ButtonSize.Normal} type={ButtonType.Danger}/>