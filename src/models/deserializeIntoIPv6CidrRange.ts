import { deserializeIntoIpRange } from './deserializeIntoIpRange';
import { type IPv6CidrRange } from './iPv6CidrRange';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv6CidrRange(iPv6CidrRange: IPv6CidrRange | undefined = {} as IPv6CidrRange) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv6CidrRange),
        "cidrAddress": n => { iPv6CidrRange.cidrAddress = n.getStringValue(); },
    }
}
