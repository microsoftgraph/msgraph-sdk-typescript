import { deserializeIntoIpRange } from './deserializeIntoIpRange';
import { type IPv4Range } from './iPv4Range';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIPv4Range(iPv4Range: IPv4Range | undefined = {} as IPv4Range) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIpRange(iPv4Range),
        "lowerAddress": n => { iPv4Range.lowerAddress = n.getStringValue(); },
        "upperAddress": n => { iPv4Range.upperAddress = n.getStringValue(); },
    }
}
