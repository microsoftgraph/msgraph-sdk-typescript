import {CountryNamedLocationImpl, IpNamedLocationImpl, NamedLocationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) : NamedLocationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.countryNamedLocation":
                    return new CountryNamedLocationImpl();
                case "#microsoft.graph.ipNamedLocation":
                    return new IpNamedLocationImpl();
            }
        }
    }
    return new NamedLocationImpl();
}
