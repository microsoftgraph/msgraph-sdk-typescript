import type {RecurrenceRange} from './recurrenceRange';
import {RecurrenceRangeType} from './recurrenceRangeType';
import {DateOnly} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecurrenceRange(recurrenceRange: RecurrenceRange | undefined = {} as RecurrenceRange) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { recurrenceRange.endDate = n.getDateOnlyValue(); },
        "numberOfOccurrences": n => { recurrenceRange.numberOfOccurrences = n.getNumberValue(); },
        "@odata.type": n => { recurrenceRange.odataType = n.getStringValue(); },
        "recurrenceTimeZone": n => { recurrenceRange.recurrenceTimeZone = n.getStringValue(); },
        "startDate": n => { recurrenceRange.startDate = n.getDateOnlyValue(); },
        "type": n => { recurrenceRange.type = n.getEnumValue<RecurrenceRangeType>(RecurrenceRangeType); },
    }
}
