import {ApplicationType} from './applicationType';
import {serializeEntity} from './serializeEntity';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLearningSummary(writer: SerializationWriter, windowsInformationProtectionAppLearningSummary: WindowsInformationProtectionAppLearningSummary | undefined = {} as WindowsInformationProtectionAppLearningSummary) : void {
        serializeEntity(writer, windowsInformationProtectionAppLearningSummary)
        writer.writeStringValue("applicationName", windowsInformationProtectionAppLearningSummary.applicationName);
        writer.writeEnumValue<ApplicationType>("applicationType", windowsInformationProtectionAppLearningSummary.applicationType);
        writer.writeNumberValue("deviceCount", windowsInformationProtectionAppLearningSummary.deviceCount);
}
