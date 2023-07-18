import {DayOfWeek} from './dayOfWeek';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecurrencePattern(recurrencePattern: RecurrencePattern | undefined = {} as RecurrencePattern) : Record<string, (node: ParseNode) => void> {
    return {
        "dayOfMonth": n => { recurrencePattern.dayOfMonth = n.getNumberValue(); },
        "daysOfWeek": n => { recurrencePattern.daysOfWeek = n.getCollectionOfEnumValues<DayOfWeek>(DayOfWeek); },
        "firstDayOfWeek": n => { recurrencePattern.firstDayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
        "index": n => { recurrencePattern.index = n.getEnumValue<WeekIndex>(WeekIndex); },
        "interval": n => { recurrencePattern.interval = n.getNumberValue(); },
        "month": n => { recurrencePattern.month = n.getNumberValue(); },
        "@odata.type": n => { recurrencePattern.odataType = n.getStringValue(); },
        "type": n => { recurrencePattern.type = n.getEnumValue<RecurrencePatternType>(RecurrencePatternType); },
    }
}
