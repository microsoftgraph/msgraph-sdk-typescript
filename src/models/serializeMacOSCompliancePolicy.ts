import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {MacOSCompliancePolicy} from './macOSCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSCompliancePolicy(writer: SerializationWriter, macOSCompliancePolicy: MacOSCompliancePolicy | undefined = {} as MacOSCompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, macOSCompliancePolicy)
        writer.writeBooleanValue("deviceThreatProtectionEnabled", macOSCompliancePolicy.deviceThreatProtectionEnabled);
        writer.writeEnumValue<DeviceThreatProtectionLevel>("deviceThreatProtectionRequiredSecurityLevel", macOSCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel);
        writer.writeBooleanValue("firewallBlockAllIncoming", macOSCompliancePolicy.firewallBlockAllIncoming);
        writer.writeBooleanValue("firewallEnabled", macOSCompliancePolicy.firewallEnabled);
        writer.writeBooleanValue("firewallEnableStealthMode", macOSCompliancePolicy.firewallEnableStealthMode);
        writer.writeStringValue("osMaximumVersion", macOSCompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", macOSCompliancePolicy.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", macOSCompliancePolicy.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", macOSCompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", macOSCompliancePolicy.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", macOSCompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", macOSCompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", macOSCompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", macOSCompliancePolicy.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", macOSCompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("storageRequireEncryption", macOSCompliancePolicy.storageRequireEncryption);
        writer.writeBooleanValue("systemIntegrityProtectionEnabled", macOSCompliancePolicy.systemIntegrityProtectionEnabled);
}
