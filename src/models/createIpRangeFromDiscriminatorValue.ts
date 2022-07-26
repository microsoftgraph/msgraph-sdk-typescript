import {IpRange, IPv4CidrRange, IPv4Range, IPv6CidrRange, IPv6Range} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpRange {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iPv4CidrRange":
                    return new IPv4CidrRange();
                case "#microsoft.graph.iPv4Range":
                    return new IPv4Range();
                case "#microsoft.graph.iPv6CidrRange":
                    return new IPv6CidrRange();
                case "#microsoft.graph.iPv6Range":
                    return new IPv6Range();
            }
        }
    }
    return new IpRange();
}
