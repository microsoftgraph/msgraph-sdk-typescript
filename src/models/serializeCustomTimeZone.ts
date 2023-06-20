import {CustomTimeZone} from './customTimeZone';
import {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {serializeDaylightTimeZoneOffset} from './serializeDaylightTimeZoneOffset';
import {serializeStandardTimeZoneOffset} from './serializeStandardTimeZoneOffset';
import {serializeTimeZoneBase} from './serializeTimeZoneBase';
import {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTimeZone(customTimeZone: CustomTimeZone | undefined = {} as CustomTimeZone, writer: SerializationWriter) : void {
        serializeTimeZoneBase(writer, customTimeZone)
        writer.writeNumberValue("bias", customTimeZone.bias);
        writer.writeObjectValue<DaylightTimeZoneOffset>("daylightOffset", customTimeZone.daylightOffset, serializeDaylightTimeZoneOffset);
        writer.writeObjectValue<StandardTimeZoneOffset>("standardOffset", customTimeZone.standardOffset, serializeStandardTimeZoneOffset);
}
