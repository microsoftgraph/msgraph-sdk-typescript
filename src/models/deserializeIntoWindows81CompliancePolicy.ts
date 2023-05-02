import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {Windows81CompliancePolicy} from './windows81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81CompliancePolicy(windows81CompliancePolicy: Windows81CompliancePolicy | undefined = {} as Windows81CompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windows81CompliancePolicy),
        "osMaximumVersion": n => { windows81CompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { windows81CompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordBlockSimple": n => { windows81CompliancePolicy.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windows81CompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windows81CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windows81CompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { windows81CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windows81CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { windows81CompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { windows81CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "storageRequireEncryption": n => { windows81CompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
