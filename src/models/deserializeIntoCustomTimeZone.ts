import {createDaylightTimeZoneOffsetFromDiscriminatorValue} from './createDaylightTimeZoneOffsetFromDiscriminatorValue';
import {createStandardTimeZoneOffsetFromDiscriminatorValue} from './createStandardTimeZoneOffsetFromDiscriminatorValue';
import type {CustomTimeZone} from './customTimeZone';
import type {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {deserializeIntoTimeZoneBase} from './deserializeIntoTimeZoneBase';
import {serializeDaylightTimeZoneOffset} from './serializeDaylightTimeZoneOffset';
import {serializeStandardTimeZoneOffset} from './serializeStandardTimeZoneOffset';
import type {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTimeZone(customTimeZone: CustomTimeZone | undefined = {} as CustomTimeZone) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTimeZoneBase(customTimeZone),
        "bias": n => { customTimeZone.bias = n.getNumberValue(); },
        "daylightOffset": n => { customTimeZone.daylightOffset = n.getObjectValue<DaylightTimeZoneOffset>(createDaylightTimeZoneOffsetFromDiscriminatorValue); },
        "standardOffset": n => { customTimeZone.standardOffset = n.getObjectValue<StandardTimeZoneOffset>(createStandardTimeZoneOffsetFromDiscriminatorValue); },
    }
}
