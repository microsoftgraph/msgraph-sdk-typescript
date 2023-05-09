import {RequiredPasswordType} from './requiredPasswordType';
import {serializeDeviceCompliancePolicy} from './serializeDeviceCompliancePolicy';
import {Windows81CompliancePolicy} from './windows81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows81CompliancePolicy(writer: SerializationWriter, windows81CompliancePolicy: Windows81CompliancePolicy | undefined = {} as Windows81CompliancePolicy) : void {
        serializeDeviceCompliancePolicy(writer, windows81CompliancePolicy)
        writer.writeStringValue("osMaximumVersion", windows81CompliancePolicy.osMaximumVersion);
        writer.writeStringValue("osMinimumVersion", windows81CompliancePolicy.osMinimumVersion);
        writer.writeBooleanValue("passwordBlockSimple", windows81CompliancePolicy.passwordBlockSimple);
        writer.writeNumberValue("passwordExpirationDays", windows81CompliancePolicy.passwordExpirationDays);
        writer.writeNumberValue("passwordMinimumCharacterSetCount", windows81CompliancePolicy.passwordMinimumCharacterSetCount);
        writer.writeNumberValue("passwordMinimumLength", windows81CompliancePolicy.passwordMinimumLength);
        writer.writeNumberValue("passwordMinutesOfInactivityBeforeLock", windows81CompliancePolicy.passwordMinutesOfInactivityBeforeLock);
        writer.writeNumberValue("passwordPreviousPasswordBlockCount", windows81CompliancePolicy.passwordPreviousPasswordBlockCount);
        writer.writeBooleanValue("passwordRequired", windows81CompliancePolicy.passwordRequired);
        writer.writeEnumValue<RequiredPasswordType>("passwordRequiredType", windows81CompliancePolicy.passwordRequiredType);
        writer.writeBooleanValue("storageRequireEncryption", windows81CompliancePolicy.storageRequireEncryption);
}
