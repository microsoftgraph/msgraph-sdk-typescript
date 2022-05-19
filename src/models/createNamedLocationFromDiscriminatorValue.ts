import {NamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : NamedLocation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.namedLocation":
                    return new NamedLocation();
            }
        }
    }
    return new NamedLocation();
}
