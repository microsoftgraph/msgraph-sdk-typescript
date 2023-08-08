import type {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {deserializeIntoStandardTimeZoneOffset} from './deserializeIntoStandardTimeZoneOffset';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDaylightTimeZoneOffset(daylightTimeZoneOffset: DaylightTimeZoneOffset | undefined = {} as DaylightTimeZoneOffset) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStandardTimeZoneOffset(daylightTimeZoneOffset),
        "daylightBias": n => { daylightTimeZoneOffset.daylightBias = n.getNumberValue(); },
    }
}
