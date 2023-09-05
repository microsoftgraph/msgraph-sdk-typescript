import { type IPv6Range } from './iPv6Range';
import { serializeIpRange } from './serializeIpRange';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIPv6Range(writer: SerializationWriter, iPv6Range: IPv6Range | undefined = {} as IPv6Range) : void {
        serializeIpRange(writer, iPv6Range)
        writer.writeStringValue("lowerAddress", iPv6Range.lowerAddress);
        writer.writeStringValue("upperAddress", iPv6Range.upperAddress);
}
