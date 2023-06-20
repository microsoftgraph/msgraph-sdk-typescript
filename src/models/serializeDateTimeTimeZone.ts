import {DateTimeTimeZone} from './dateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDateTimeTimeZone(dateTimeTimeZone: DateTimeTimeZone | undefined = {} as DateTimeTimeZone, writer: SerializationWriter) : void {
        writer.writeStringValue("dateTime", dateTimeTimeZone.dateTime);
        writer.writeStringValue("@odata.type", dateTimeTimeZone.odataType);
        writer.writeStringValue("timeZone", dateTimeTimeZone.timeZone);
        writer.writeAdditionalData(dateTimeTimeZone.additionalData);
}
