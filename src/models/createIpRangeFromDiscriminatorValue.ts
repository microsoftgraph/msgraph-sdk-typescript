import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {deserializeIntoIPv4CidrRange} from './deserializeIntoIPv4CidrRange';
import {deserializeIntoIPv4Range} from './deserializeIntoIPv4Range';
import {deserializeIntoIPv6CidrRange} from './deserializeIntoIPv6CidrRange';
import {deserializeIntoIPv6Range} from './deserializeIntoIPv6Range';
import {IpRange, IPv4CidrRange, IPv4Range, IPv6CidrRange, IPv6Range} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iPv4CidrRange":
                    return deserializeIntoIPv4CidrRange;
                case "#microsoft.graph.iPv4Range":
                    return deserializeIntoIPv4Range;
                case "#microsoft.graph.iPv6CidrRange":
                    return deserializeIntoIPv6CidrRange;
                case "#microsoft.graph.iPv6Range":
                    return deserializeIntoIPv6Range;
            }
        }
    }
    return deserializeIntoIpRange;
}
