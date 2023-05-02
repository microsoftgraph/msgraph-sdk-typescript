import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {IosCompliancePolicy} from './iosCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCompliancePolicy(iosCompliancePolicy: IosCompliancePolicy | undefined = {} as IosCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(iosCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { iosCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue(); },
        "deviceThreatProtectionRequiredSecurityLevel": n => { iosCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
        "managedEmailProfileRequired": n => { iosCompliancePolicy.managedEmailProfileRequired = n.getBooleanValue(); },
        "osMaximumVersion": n => { iosCompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { iosCompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passcodeBlockSimple": n => { iosCompliancePolicy.passcodeBlockSimple = n.getBooleanValue(); },
        "passcodeExpirationDays": n => { iosCompliancePolicy.passcodeExpirationDays = n.getNumberValue(); },
        "passcodeMinimumCharacterSetCount": n => { iosCompliancePolicy.passcodeMinimumCharacterSetCount = n.getNumberValue(); },
        "passcodeMinimumLength": n => { iosCompliancePolicy.passcodeMinimumLength = n.getNumberValue(); },
        "passcodeMinutesOfInactivityBeforeLock": n => { iosCompliancePolicy.passcodeMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passcodePreviousPasscodeBlockCount": n => { iosCompliancePolicy.passcodePreviousPasscodeBlockCount = n.getNumberValue(); },
        "passcodeRequired": n => { iosCompliancePolicy.passcodeRequired = n.getBooleanValue(); },
        "passcodeRequiredType": n => { iosCompliancePolicy.passcodeRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "securityBlockJailbrokenDevices": n => { iosCompliancePolicy.securityBlockJailbrokenDevices = n.getBooleanValue(); },
    }
}
