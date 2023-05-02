import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows10MobileCompliancePolicy} from './windows10MobileCompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10MobileCompliancePolicy(windows10MobileCompliancePolicy: Windows10MobileCompliancePolicy | undefined = {} as Windows10MobileCompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows10MobileCompliancePolicy),
        "bitLockerEnabled": n => { windows10MobileCompliancePolicy.bitLockerEnabled = n.getBooleanValue(); },
        "codeIntegrityEnabled": n => { windows10MobileCompliancePolicy.codeIntegrityEnabled = n.getBooleanValue(); },
        "earlyLaunchAntiMalwareDriverEnabled": n => { windows10MobileCompliancePolicy.earlyLaunchAntiMalwareDriverEnabled = n.getBooleanValue(); },
        "osMaximumVersion": n => { windows10MobileCompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { windows10MobileCompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordBlockSimple": n => { windows10MobileCompliancePolicy.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windows10MobileCompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windows10MobileCompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windows10MobileCompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { windows10MobileCompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windows10MobileCompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { windows10MobileCompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { windows10MobileCompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "passwordRequireToUnlockFromIdle": n => { windows10MobileCompliancePolicy.passwordRequireToUnlockFromIdle = n.getBooleanValue(); },
        "secureBootEnabled": n => { windows10MobileCompliancePolicy.secureBootEnabled = n.getBooleanValue(); },
        "storageRequireEncryption": n => { windows10MobileCompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
