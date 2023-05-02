import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {IosCompliancePolicy} from './iosCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCompliancePolicy(writer: SerializationWriter, iosCompliancePolicy: IosCompliancePolicy | undefined = {} as IosCompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, iosCompliancePolicy)
        writer.writeBooleanValue("deviceThreatProtectionEnabled", iosCompliancePolicy.deviceThreatProtectionEnabled);
        writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", iosCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel);
        writer.writeBooleanValue("managedEmailProfileRequired", iosCompliancePolicy.managedEmailProfileRequired);
        writer.writeStringValue("osMaximumVersion", iosCompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", iosCompliancePolicy.osMinimumVersion);
        writer.writeBooleanValue("passcodeBlockSimple", iosCompliancePolicy.passcodeBlockSimple);
        writer.writeNumberValue("passcodeExpirationDays", iosCompliancePolicy.passcodeExpirationDays);
        writer.writeNumberValue("passcodeMinimumCharacterSetCount", iosCompliancePolicy.passcodeMinimumCharacterSetCount);
        writer.writeNumberValue("passcodeMinimumLength", iosCompliancePolicy.passcodeMinimumLength);
        writer.writeNumberValue("passcodeMinutesOfInactivityBeforeLock", iosCompliancePolicy.passcodeMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passcodePreviousPasscodeBlockCount", iosCompliancePolicy.passcodePreviousPasscodeBlockCount);
        writer.writeBooleanValue("passcodeRequired", iosCompliancePolicy.passcodeRequired);
        writer.writeEnumValue<RequiredPasswordType>("passcodeRequiredType", iosCompliancePolicy.passcodeRequiredType);
        writer.writeBooleanValue("securityBlockJailbrokenDevices", iosCompliancePolicy.securityBlockJailbrokenDevices);
}
