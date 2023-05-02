import {DateTimeTimeZone} from './dateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDateTimeTimeZone(writer: SerializationWriter, dateTimeTimeZone: DateTimeTimeZone | undefined = {} as DateTimeTimeZone) : void {
        writer.writeStringValue("dateTime", dateTimeTimeZone.dateTime);
        writer.writeStringValue("@odata.type", dateTimeTimeZone.odataType);
        writer.writeStringValue("timeZone", dateTimeTimeZone.timeZone);
        writer.writeAdditionalData(dateTimeTimeZone.additionalData);
}
