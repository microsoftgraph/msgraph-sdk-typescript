import {ApplicationType} from './applicationType';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLearningSummary(windowsInformationProtectionAppLearningSummary: WindowsInformationProtectionAppLearningSummary | undefined = {} as WindowsInformationProtectionAppLearningSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionAppLearningSummary),
        "applicationName": n => { windowsInformationProtectionAppLearningSummary.applicationName = n.getStringValue(); },
        "applicationType": n => { windowsInformationProtectionAppLearningSummary.applicationType = n.getEnumValue<ApplicationType>(ApplicationType); },
        "deviceCount": n => { windowsInformationProtectionAppLearningSummary.deviceCount = n.getNumberValue(); },
    }
}
