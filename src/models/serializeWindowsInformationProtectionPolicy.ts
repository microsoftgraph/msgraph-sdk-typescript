import {serializeWindowsInformationProtection} from './serializeWindowsInformationProtection';
import {WindowsInformationProtectionPinCharacterRequirements} from './windowsInformationProtectionPinCharacterRequirements';
import {WindowsInformationProtectionPolicy} from './windowsInformationProtectionPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionPolicy(writer: SerializationWriter, windowsInformationProtectionPolicy: WindowsInformationProtectionPolicy | undefined = {} as WindowsInformationProtectionPolicy) : void {
        serializeWindowsInformationProtection(writer, windowsInformationProtectionPolicy)
        writer.writeNumberValue("daysWithoutContactBeforeUnenroll", windowsInformationProtectionPolicy.daysWithoutContactBeforeUnenroll);
        writer.writeStringValue("mdmEnrollmentUrl", windowsInformationProtectionPolicy.mdmEnrollmentUrl);
        writer.writeNumberValue("minutesOfInactivityBeforeDeviceLock", windowsInformationProtectionPolicy.minutesOfInactivityBeforeDeviceLock);
        writer.writeNumberValue("numberOfPastPinsRemembered", windowsInformationProtectionPolicy.numberOfPastPinsRemembered);
        writer.writeNumberValue("passwordMaximumAttemptCount", windowsInformationProtectionPolicy.passwordMaximumAttemptCount);
        writer.writeNumberValue("pinExpirationDays", windowsInformationProtectionPolicy.pinExpirationDays);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinLowercaseLetters", windowsInformationProtectionPolicy.pinLowercaseLetters);
        writer.writeNumberValue("pinMinimumLength", windowsInformationProtectionPolicy.pinMinimumLength);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinSpecialCharacters", windowsInformationProtectionPolicy.pinSpecialCharacters);
        writer.writeEnumValue<WindowsInformationProtectionPinCharacterRequirements>("pinUppercaseLetters", windowsInformationProtectionPolicy.pinUppercaseLetters);
        writer.writeBooleanValue("revokeOnMdmHandoffDisabled", windowsInformationProtectionPolicy.revokeOnMdmHandoffDisabled);
        writer.writeBooleanValue("windowsHelloForBusinessBlocked", windowsInformationProtectionPolicy.windowsHelloForBusinessBlocked);
}
