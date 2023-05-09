import {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {serializeStandardTimeZoneOffset} from './serializeStandardTimeZoneOffset';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDaylightTimeZoneOffset(writer: SerializationWriter, daylightTimeZoneOffset: DaylightTimeZoneOffset | undefined = {} as DaylightTimeZoneOffset) : void {
        serializeStandardTimeZoneOffset(writer, daylightTimeZoneOffset)
        writer.writeNumberValue("daylightBias", daylightTimeZoneOffset.daylightBias);
}
