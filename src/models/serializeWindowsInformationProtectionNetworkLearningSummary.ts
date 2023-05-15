import {serializeEntity} from './serializeEntity';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionNetworkLearningSummary(writer: SerializationWriter, windowsInformationProtectionNetworkLearningSummary: WindowsInformationProtectionNetworkLearningSummary | undefined = {} as WindowsInformationProtectionNetworkLearningSummary) : void {
        serializeEntity(writer, windowsInformationProtectionNetworkLearningSummary)
        writer.writeNumberValue("deviceCount", windowsInformationProtectionNetworkLearningSummary.deviceCount);
        writer.writeStringValue("url", windowsInformationProtectionNetworkLearningSummary.url);
}
