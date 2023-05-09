import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoEnrollmentTroubleshootingEvent} from './deserializeIntoEnrollmentTroubleshootingEvent';
import {DeviceManagementTroubleshootingEvent, EnrollmentTroubleshootingEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.enrollmentTroubleshootingEvent":
                    return deserializeIntoEnrollmentTroubleshootingEvent;
            }
        }
    }
    return deserializeIntoDeviceManagementTroubleshootingEvent;
}
