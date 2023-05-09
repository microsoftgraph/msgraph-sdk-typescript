import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {IPv6Range} from './iPv6Range';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv6Range(iPv6Range: IPv6Range | undefined = {} as IPv6Range) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv6Range),
        "lowerAddress": n => { iPv6Range.lowerAddress = n.getStringValue(); },
        "upperAddress": n => { iPv6Range.upperAddress = n.getStringValue(); },
    }
}
