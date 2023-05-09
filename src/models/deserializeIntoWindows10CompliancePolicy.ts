import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows10CompliancePolicy} from './windows10CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CompliancePolicy(windows10CompliancePolicy: Windows10CompliancePolicy | undefined = {} as Windows10CompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows10CompliancePolicy),
        "bitLockerEnabled": n => { windows10CompliancePolicy.bitLockerEnabled = n.getBooleanValue(); },
        "codeIntegrityEnabled": n => { windows10CompliancePolicy.codeIntegrityEnabled = n.getBooleanValue(); },
        "earlyLaunchAntiMalwareDriverEnabled": n => { windows10CompliancePolicy.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue(); },
        "mobileOsMaximumVersion": n => { windows10CompliancePolicy.mobileOsMaximumVersion = n.getStringValue(); },
        "mobileOsMinimumVersion": n => { windows10CompliancePolicy.mobileOsMinimumVersion = n.getStringValue(); },
        "osMaximumVersion": n => { windows10CompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { windows10CompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordBlockSimple": n => { windows10CompliancePolicy.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windows10CompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windows10CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windows10CompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { windows10CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windows10CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { windows10CompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredToUnlockFromIdle": n => { windows10CompliancePolicy.passwordRequiredToUnlockFromIdle = n.getBooleanValue(); },
        "passwordRequiredType": n => { windows10CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "requireHealthyDeviceReport": n => { windows10CompliancePolicy.requireHealthyDeviceReport = n.getBooleanValue(); },
        "secureBootEnabled": n => { windows10CompliancePolicy.secureBootEnabled = n.getBooleanValue(); },
        "storageRequireEncryption": n => { windows10CompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
