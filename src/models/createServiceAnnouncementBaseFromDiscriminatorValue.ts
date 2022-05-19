import {ServiceAnnouncementBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceAnnouncementBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceAnnouncementBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.serviceAnnouncementBase":
                    return new ServiceAnnouncementBase();
            }
        }
    }
    return new ServiceAnnouncementBase();
}
