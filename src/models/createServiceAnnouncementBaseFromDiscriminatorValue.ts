import {ServiceAnnouncementBase, ServiceHealthIssue, ServiceUpdateMessage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.serviceHealthIssue":
                    return new ServiceHealthIssue();
                case "#microsoft.graph.serviceUpdateMessage":
                    return new ServiceUpdateMessage();
            }
        }
    }
    return new ServiceAnnouncementBase();
}
