import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IPv4CidrRange} from './iPv4CidrRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv4CidrRange(iPv4CidrRange: IPv4CidrRange | undefined = {} as IPv4CidrRange) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv4CidrRange),
        "cidrAddress": n => { iPv4CidrRange.cidrAddress = n.getStringValue(); },
    }
}
