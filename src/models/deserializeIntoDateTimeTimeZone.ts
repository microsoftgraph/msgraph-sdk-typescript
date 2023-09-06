import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDateTimeTimeZone(dateTimeTimeZone: DateTimeTimeZone | undefined = {} as DateTimeTimeZone) : Record<string, (node: ParseNode) => void> {
    return {
        "dateTime": n => { dateTimeTimeZone.dateTime = n.getStringValue(); },
        "@odata.type": n => { dateTimeTimeZone.odataType = n.getStringValue(); },
        "timeZone": n => { dateTimeTimeZone.timeZone = n.getStringValue(); },
    }
}
