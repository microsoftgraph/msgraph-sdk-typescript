import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {DeviceThreatProtectionLevel} from './deviceThreatProtectionLevel';
import {MacOSCompliancePolicy} from './macOSCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCompliancePolicy(macOSCompliancePolicy: MacOSCompliancePolicy | undefined = {} as MacOSCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(macOSCompliancePolicy),
        "deviceThreatProtectionEnabled": n => { macOSCompliancePolicy.deviceThreatProtectionEnabled = n.getBooleanValue(); },
        "deviceThreatProtectionRequiredSecurityLevel": n => { macOSCompliancePolicy.deviceThreatProtectionRequiredSecurityLevel = n.getEnumValue<DeviceThreatProtectionLevel>(DeviceThreatProtectionLevel); },
        "firewallBlockAllIncoming": n => { macOSCompliancePolicy.firewallBlockAllIncoming = n.getBooleanValue(); },
        "firewallEnabled": n => { macOSCompliancePolicy.firewallEnabled = n.getBooleanValue(); },
        "firewallEnableStealthMode": n => { macOSCompliancePolicy.firewallEnableStealthMode = n.getBooleanValue(); },
        "osMaximumVersion": n => { macOSCompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { macOSCompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordBlockSimple": n => { macOSCompliancePolicy.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { macOSCompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { macOSCompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { macOSCompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { macOSCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { macOSCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { macOSCompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { macOSCompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "storageRequireEncryption": n => { macOSCompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
        "systemIntegrityProtectionEnabled": n => { macOSCompliancePolicy.systemIntegrityProtectionEnabled = n.getBooleanValue(); },
    }
}
