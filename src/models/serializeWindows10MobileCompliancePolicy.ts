import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Windows10MobileCompliancePolicy} from './windows10MobileCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10MobileCompliancePolicy(writer: SerializationWriter, windows10MobileCompliancePolicy: Windows10MobileCompliancePolicy | undefined = {} as Windows10MobileCompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, windows10MobileCompliancePolicy)
        writer.writeBooleanValue("bitLockerEnabled", windows10MobileCompliancePolicy.bitLockerEnabled);
        writer.writeBooleanValue("codeIntegrityEnabled", windows10MobileCompliancePolicy.codeIntegrityEnabled);
        writer.writeBooleanValue("earlyLaunchAntiMalwareDriverEnabled", windows10MobileCompliancePolicy.earlyLaunchAntiMalwareDriverEnabled);
        writer.writeStringValue("osMaximumVersion", windows10MobileCompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", windows10MobileCompliancePolicy.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", windows10MobileCompliancePolicy.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", windows10MobileCompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", windows10MobileCompliancePolicy.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", windows10MobileCompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", windows10MobileCompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", windows10MobileCompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", windows10MobileCompliancePolicy.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windows10MobileCompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("passwordRequireToUnlockFromIdle", windows10MobileCompliancePolicy.passwordRequireToUnlockFromIdle);
        writer.writeBooleanValue("secureBootEnabled", windows10MobileCompliancePolicy.secureBootEnabled);
        writer.writeBooleanValue("storageRequireEncryption", windows10MobileCompliancePolicy.storageRequireEncryption);
}
