import { DayOfWeek } from './dayOfWeek';
import { type StandardTimeZoneOffset } from './standardTimeZoneOffset';
import { TimeOnly, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStandardTimeZoneOffset(standardTimeZoneOffset: StandardTimeZoneOffset | undefined = {} as StandardTimeZoneOffset) : Record<string, (node: ParseNode) => void> {
    return {
        "dayOccurrence": n => { standardTimeZoneOffset.dayOccurrence = n.getNumberValue(); },
        "dayOfWeek": n => { standardTimeZoneOffset.dayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
        "month": n => { standardTimeZoneOffset.month = n.getNumberValue(); },
        "@odata.type": n => { standardTimeZoneOffset.odataType = n.getStringValue(); },
        "time": n => { standardTimeZoneOffset.time = n.getTimeOnlyValue(); },
        "year": n => { standardTimeZoneOffset.year = n.getNumberValue(); },
    }
}
