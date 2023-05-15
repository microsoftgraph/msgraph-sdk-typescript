import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionPolicy(windowsInformationProtectionPolicy: WindowsInformationProtectionPolicy | undefined = {} as WindowsInformationProtectionPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtection(windowsInformationProtectionPolicy),
        "daysWithoutContactBeforeUnenroll": n => { windowsInformationProtectionPolicy.daysWithoutContactBeforeUnenroll = n.getNumberValue(); },
        "mdmEnrollmentUrl": n => { windowsInformationProtectionPolicy.mdmEnrollmentUrl = n.getStringValue(); },
        "minutesOfInactivityBeforeDeviceLock": n => { windowsInformationProtectionPolicy.minutesOfInactivityBeforeDeviceLock = n.getNumberValue(); },
        "numberOfPastPinsRemembered": n => { windowsInformationProtectionPolicy.numberOfPastPinsRemembered = n.getNumberValue(); },
        "passwordMaximumAttemptCount": n => { windowsInformationProtectionPolicy.passwordMaximumAttemptCount = n.getNumberValue(); },
        "pinExpirationDays": n => { windowsInformationProtectionPolicy.pinExpirationDays = n.getNumberValue(); },
        "pinLowercaseLetters": n => { windowsInformationProtectionPolicy.pinLowercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
        "pinMinimumLength": n => { windowsInformationProtectionPolicy.pinMinimumLength = n.getNumberValue(); },
        "pinSpecialCharacters": n => { windowsInformationProtectionPolicy.pinSpecialCharacters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
        "pinUppercaseLetters": n => { windowsInformationProtectionPolicy.pinUppercaseLetters = n.getEnumValue<WindowsInformationProtectionPinCharacterRequirements>(WindowsInformationProtectionPinCharacterRequirements); },
        "revokeOnMdmHandoffDisabled": n => { windowsInformationProtectionPolicy.revokeOnMdmHandoffDisabled = n.getBooleanValue(); },
        "windowsHelloForBusinessBlocked": n => { windowsInformationProtectionPolicy.windowsHelloForBusinessBlocked = n.getBooleanValue(); },
    }
}
