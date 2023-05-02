import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {RequiredPasswordType} from './requiredPasswordType';
import {WindowsPhone81CompliancePolicy} from './windowsPhone81CompliancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CompliancePolicy(windowsPhone81CompliancePolicy: WindowsPhone81CompliancePolicy | undefined = {} as WindowsPhone81CompliancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceCompliancePolicy(windowsPhone81CompliancePolicy),
        "osMaximumVersion": n => { windowsPhone81CompliancePolicy.osMaximumVersion = n.getStringValue(); },
        "osMinimumVersion": n => { windowsPhone81CompliancePolicy.osMinimumVersion = n.getStringValue(); },
        "passwordBlockSimple": n => { windowsPhone81CompliancePolicy.passwordBlockSimple = n.getBooleanValue(); },
        "passwordExpirationDays": n => { windowsPhone81CompliancePolicy.passwordExpirationDays = n.getNumberValue(); },
        "passwordMinimumCharacterSetCount": n => { windowsPhone81CompliancePolicy.passwordMinimumCharacterSetCount = n.getNumberValue(); },
        "passwordMinimumLength": n => { windowsPhone81CompliancePolicy.passwordMinimumLength = n.getNumberValue(); },
        "passwordMinutesOfInactivityBeforeLock": n => { windowsPhone81CompliancePolicy.passwordMinutesOfInactivityBeforeLock = n.getNumberValue(); },
        "passwordPreviousPasswordBlockCount": n => { windowsPhone81CompliancePolicy.passwordPreviousPasswordBlockCount = n.getNumberValue(); },
        "passwordRequired": n => { windowsPhone81CompliancePolicy.passwordRequired = n.getBooleanValue(); },
        "passwordRequiredType": n => { windowsPhone81CompliancePolicy.passwordRequiredType = n.getEnumValue<RequiredPasswordType>(RequiredPasswordType); },
        "storageRequireEncryption": n => { windowsPhone81CompliancePolicy.storageRequireEncryption = n.getBooleanValue(); },
    }
}
