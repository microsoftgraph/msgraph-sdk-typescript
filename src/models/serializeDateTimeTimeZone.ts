import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDateTimeTimeZone(writer: SerializationWriter, dateTimeTimeZone: DateTimeTimeZone | undefined = {} as DateTimeTimeZone) : void {
        writer.writeStringValue("dateTime", dateTimeTimeZone.dateTime);
        writer.writeStringValue("@odata.type", dateTimeTimeZone.odataType);
        writer.writeStringValue("timeZone", dateTimeTimeZone.timeZone);
        writer.writeAdditionalData(dateTimeTimeZone.additionalData);
}
