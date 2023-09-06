import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type WindowsInformationProtectionNetworkLearningSummary } from './windowsInformationProtectionNetworkLearningSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionNetworkLearningSummary(windowsInformationProtectionNetworkLearningSummary: WindowsInformationProtectionNetworkLearningSummary | undefined = {} as WindowsInformationProtectionNetworkLearningSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionNetworkLearningSummary),
        "deviceCount": n => { windowsInformationProtectionNetworkLearningSummary.deviceCount = n.getNumberValue(); },
        "url": n => { windowsInformationProtectionNetworkLearningSummary.url = n.getStringValue(); },
    }
}
