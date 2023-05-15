import {TimeZoneBase} from './timeZoneBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeZoneBase(writer: SerializationWriter, timeZoneBase: TimeZoneBase | undefined = {} as TimeZoneBase) : void {
        writer.writeStringValue("name", timeZoneBase.name);
        writer.writeStringValue("@odata.type", timeZoneBase.odataType);
        writer.writeAdditionalData(timeZoneBase.additionalData);
}
