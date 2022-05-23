import {ServiceAnnouncementBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.serviceAnnouncementBase":
                    return new ServiceAnnouncementBaseImpl();
            }
        }
    }
    return new ServiceAnnouncementBaseImpl();
}
