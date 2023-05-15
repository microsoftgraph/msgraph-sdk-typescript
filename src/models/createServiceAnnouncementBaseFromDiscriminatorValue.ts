import {deserializeIntoServiceAnnouncementBase} from './deserializeIntoServiceAnnouncementBase';
import {deserializeIntoServiceHealthIssue} from './deserializeIntoServiceHealthIssue';
import {deserializeIntoServiceUpdateMessage} from './deserializeIntoServiceUpdateMessage';
import {ServiceAnnouncementBase, ServiceHealthIssue, ServiceUpdateMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.serviceHealthIssue":
                    return deserializeIntoServiceHealthIssue;
                case "#microsoft.graph.serviceUpdateMessage":
                    return deserializeIntoServiceUpdateMessage;
            }
        }
    }
    return deserializeIntoServiceAnnouncementBase;
}
