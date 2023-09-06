import { serializeEntity } from './serializeEntity';
import { type WindowsInformationProtectionNetworkLearningSummary } from './windowsInformationProtectionNetworkLearningSummary';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionNetworkLearningSummary(writer: SerializationWriter, windowsInformationProtectionNetworkLearningSummary: WindowsInformationProtectionNetworkLearningSummary | undefined = {} as WindowsInformationProtectionNetworkLearningSummary) : void {
        serializeEntity(writer, windowsInformationProtectionNetworkLearningSummary)
        writer.writeNumberValue("deviceCount", windowsInformationProtectionNetworkLearningSummary.deviceCount);
        writer.writeStringValue("url", windowsInformationProtectionNetworkLearningSummary.url);
}
