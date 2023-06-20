import {IPv6Range} from './iPv6Range';
import {serializeIpRange} from './serializeIpRange';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIPv6Range(iPv6Range: IPv6Range | undefined = {} as IPv6Range, writer: SerializationWriter) : void {
        serializeIpRange(writer, iPv6Range)
        writer.writeStringValue("lowerAddress", iPv6Range.lowerAddress);
        writer.writeStringValue("upperAddress", iPv6Range.upperAddress);
}
