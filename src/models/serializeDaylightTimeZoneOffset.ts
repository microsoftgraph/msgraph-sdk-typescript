import { type DaylightTimeZoneOffset } from './daylightTimeZoneOffset';
import { serializeStandardTimeZoneOffset } from './serializeStandardTimeZoneOffset';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDaylightTimeZoneOffset(writer: SerializationWriter, daylightTimeZoneOffset: DaylightTimeZoneOffset | undefined = {} as DaylightTimeZoneOffset) : void {
        serializeStandardTimeZoneOffset(writer, daylightTimeZoneOffset)
        writer.writeNumberValue("daylightBias", daylightTimeZoneOffset.daylightBias);
}
