import {DeviceManagementTroubleshootingEventImpl, EnrollmentTroubleshootingEventImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceManagementTroubleshootingEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceManagementTroubleshootingEventImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.enrollmentTroubleshootingEvent":
                    return new EnrollmentTroubleshootingEventImpl();
            }
        }
    }
    return new DeviceManagementTroubleshootingEventImpl();
}
