import {serializeEntity} from './serializeEntity';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSoftwareUpdateStatusSummary(writer: SerializationWriter, softwareUpdateStatusSummary: SoftwareUpdateStatusSummary | undefined = {} as SoftwareUpdateStatusSummary) : void {
        serializeEntity(writer, softwareUpdateStatusSummary)
        writer.writeNumberValue("compliantDeviceCount", softwareUpdateStatusSummary.compliantDeviceCount);
        writer.writeNumberValue("compliantUserCount", softwareUpdateStatusSummary.compliantUserCount);
        writer.writeNumberValue("conflictDeviceCount", softwareUpdateStatusSummary.conflictDeviceCount);
        writer.writeNumberValue("conflictUserCount", softwareUpdateStatusSummary.conflictUserCount);
        writer.writeStringValue("displayName", softwareUpdateStatusSummary.displayName);
        writer.writeNumberValue("errorDeviceCount", softwareUpdateStatusSummary.errorDeviceCount);
        writer.writeNumberValue("errorUserCount", softwareUpdateStatusSummary.errorUserCount);
        writer.writeNumberValue("nonCompliantDeviceCount", softwareUpdateStatusSummary.nonCompliantDeviceCount);
        writer.writeNumberValue("nonCompliantUserCount", softwareUpdateStatusSummary.nonCompliantUserCount);
        writer.writeNumberValue("notApplicableDeviceCount", softwareUpdateStatusSummary.notApplicableDeviceCount);
        writer.writeNumberValue("notApplicableUserCount", softwareUpdateStatusSummary.notApplicableUserCount);
        writer.writeNumberValue("remediatedDeviceCount", softwareUpdateStatusSummary.remediatedDeviceCount);
        writer.writeNumberValue("remediatedUserCount", softwareUpdateStatusSummary.remediatedUserCount);
        writer.writeNumberValue("unknownDeviceCount", softwareUpdateStatusSummary.unknownDeviceCount);
        writer.writeNumberValue("unknownUserCount", softwareUpdateStatusSummary.unknownUserCount);
}
