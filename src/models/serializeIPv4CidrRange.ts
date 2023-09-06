import { type IPv4CidrRange } from './iPv4CidrRange';
import { serializeIpRange } from './serializeIpRange';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIPv4CidrRange(writer: SerializationWriter, iPv4CidrRange: IPv4CidrRange | undefined = {} as IPv4CidrRange) : void {
        serializeIpRange(writer, iPv4CidrRange)
        writer.writeStringValue("cidrAddress", iPv4CidrRange.cidrAddress);
}
