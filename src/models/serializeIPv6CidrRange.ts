import {IPv6CidrRange} from './iPv6CidrRange';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIPv6CidrRange(writer: SerializationWriter, iPv6CidrRange: IPv6CidrRange | undefined = {} as IPv6CidrRange) : void {
        serializeIpRange(writer, iPv6CidrRange)
        writer.writeStringValue("cidrAddress", iPv6CidrRange.cidrAddress);
}
