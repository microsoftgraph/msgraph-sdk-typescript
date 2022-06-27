import {IpRangeImpl, IPv4CidrRangeImpl, IPv4RangeImpl, IPv6CidrRangeImpl, IPv6RangeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIpRangeFromDiscriminatorValue(parseNode: ParseNode | undefined) : IpRangeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.iPv4CidrRange":
                    return new IPv4CidrRangeImpl();
                case "#microsoft.graph.iPv4Range":
                    return new IPv4RangeImpl();
                case "#microsoft.graph.iPv6CidrRange":
                    return new IPv6CidrRangeImpl();
                case "#microsoft.graph.iPv6Range":
                    return new IPv6RangeImpl();
            }
        }
    }
    return new IpRangeImpl();
}
