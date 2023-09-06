import { type CustomTimeZone } from './customTimeZone';
import { type DaylightTimeZoneOffset } from './daylightTimeZoneOffset';
import { serializeDaylightTimeZoneOffset } from './serializeDaylightTimeZoneOffset';
import { serializeStandardTimeZoneOffset } from './serializeStandardTimeZoneOffset';
import { serializeTimeZoneBase } from './serializeTimeZoneBase';
import { type StandardTimeZoneOffset } from './standardTimeZoneOffset';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomTimeZone(writer: SerializationWriter, customTimeZone: CustomTimeZone | undefined = {} as CustomTimeZone) : void {
        serializeTimeZoneBase(writer, customTimeZone)
        writer.writeNumberValue("bias", customTimeZone.bias);
        writer.writeObjectValue<DaylightTimeZoneOffset>("daylightOffset", customTimeZone.daylightOffset, serializeDaylightTimeZoneOffset);
        writer.writeObjectValue<StandardTimeZoneOffset>("standardOffset", customTimeZone.standardOffset, serializeStandardTimeZoneOffset);
}
