import { type TimeZoneBase } from './timeZoneBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTimeZoneBase(writer: SerializationWriter, timeZoneBase: TimeZoneBase | undefined = {} as TimeZoneBase) : void {
        writer.writeStringValue("name", timeZoneBase.name);
        writer.writeStringValue("@odata.type", timeZoneBase.odataType);
        writer.writeAdditionalData(timeZoneBase.additionalData);
}
