import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSoftwareUpdateStatusSummary(softwareUpdateStatusSummary: SoftwareUpdateStatusSummary | undefined = {} as SoftwareUpdateStatusSummary) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(softwareUpdateStatusSummary),
        "compliantDeviceCount": n => { softwareUpdateStatusSummary.compliantDeviceCount = n.getNumberValue(); },
        "compliantUserCount": n => { softwareUpdateStatusSummary.compliantUserCount = n.getNumberValue(); },
        "conflictDeviceCount": n => { softwareUpdateStatusSummary.conflictDeviceCount = n.getNumberValue(); },
        "conflictUserCount": n => { softwareUpdateStatusSummary.conflictUserCount = n.getNumberValue(); },
        "displayName": n => { softwareUpdateStatusSummary.displayName = n.getStringValue(); },
        "errorDeviceCount": n => { softwareUpdateStatusSummary.errorDeviceCount = n.getNumberValue(); },
        "errorUserCount": n => { softwareUpdateStatusSummary.errorUserCount = n.getNumberValue(); },
        "nonCompliantDeviceCount": n => { softwareUpdateStatusSummary.nonCompliantDeviceCount = n.getNumberValue(); },
        "nonCompliantUserCount": n => { softwareUpdateStatusSummary.nonCompliantUserCount = n.getNumberValue(); },
        "notApplicableDeviceCount": n => { softwareUpdateStatusSummary.notApplicableDeviceCount = n.getNumberValue(); },
        "notApplicableUserCount": n => { softwareUpdateStatusSummary.notApplicableUserCount = n.getNumberValue(); },
        "remediatedDeviceCount": n => { softwareUpdateStatusSummary.remediatedDeviceCount = n.getNumberValue(); },
        "remediatedUserCount": n => { softwareUpdateStatusSummary.remediatedUserCount = n.getNumberValue(); },
        "unknownDeviceCount": n => { softwareUpdateStatusSummary.unknownDeviceCount = n.getNumberValue(); },
        "unknownUserCount": n => { softwareUpdateStatusSummary.unknownUserCount = n.getNumberValue(); },
    }
}
