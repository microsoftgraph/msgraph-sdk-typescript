import {BaseItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseItemVersion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.baseItemVersion":
                    return new BaseItemVersion();
            }
        }
    }
    return new BaseItemVersion();
}
