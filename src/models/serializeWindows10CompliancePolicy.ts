import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Windows10CompliancePolicy} from './windows10CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10CompliancePolicy(writer: SerializationWriter, windows10CompliancePolicy: Windows10CompliancePolicy | undefined = {} as Windows10CompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, windows10CompliancePolicy)
        writer.writeBooleanValue("bitLockerEnabled", windows10CompliancePolicy.bitLockerEnabled);
        writer.writeBooleanValue("codeIntegrityEnabled", windows10CompliancePolicy.codeIntegrityEnabled);
        writer.writeBooleanValue("earlyLaunchAntiMalwareDriverEnabled", windows10CompliancePolicy.earlyLaunchAntiMalwareDriverEnabled);
        writer.writeStringValue("mobileOsMaximumVersion", windows10CompliancePolicy.mobileOsMaximumVersion);
        writer.writeStringValue("mobileOsMinimumVersion", windows10CompliancePolicy.mobileOsMinimumVersion);
        writer.writeStringValue("osMaximumVersion", windows10CompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", windows10CompliancePolicy.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", windows10CompliancePolicy.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", windows10CompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", windows10CompliancePolicy.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", windows10CompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", windows10CompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", windows10CompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", windows10CompliancePolicy.passwordRequired);
        writer.writeBooleanValue("passwordRequiredToUnlockFromIdle", windows10CompliancePolicy.passwordRequiredToUnlockFromIdle);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windows10CompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("requireHealthyDeviceReport", windows10CompliancePolicy.requireHealthyDeviceReport);
        writer.writeBooleanValue("secureBootEnabled", windows10CompliancePolicy.secureBootEnabled);
        writer.writeBooleanValue("storageRequireEncryption", windows10CompliancePolicy.storageRequireEncryption);
}
