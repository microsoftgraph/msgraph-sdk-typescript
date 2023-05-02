import {deserializeIntoCountryNamedLocation} from './deserializeIntoCountryNamedLocation';
import {deserializeIntoIpNamedLocation} from './deserializeIntoIpNamedLocation';
import {deserializeIntoNamedLocation} from './deserializeIntoNamedLocation';
import {CountryNamedLocation, IpNamedLocation, NamedLocation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNamedLocationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.countryNamedLocation":
                    return deserializeIntoCountryNamedLocation;
                case "#microsoft.graph.ipNamedLocation":
                    return deserializeIntoIpNamedLocation;
            }
        }
    }
    return deserializeIntoNamedLocation;
}
