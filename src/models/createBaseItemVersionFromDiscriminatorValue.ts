import {BaseItemVersionImpl, DriveItemVersionImpl, ListItemVersionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemVersionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.driveItemVersion":
                    return new DriveItemVersionImpl();
                case "#microsoft.graph.listItemVersion":
                    return new ListItemVersionImpl();
            }
        }
    }
    return new BaseItemVersionImpl();
}
