import {MobileLobAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileLobAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileLobAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mobileLobApp":
                    return new MobileLobAppImpl();
            }
        }
    }
    return new MobileLobAppImpl();
}
