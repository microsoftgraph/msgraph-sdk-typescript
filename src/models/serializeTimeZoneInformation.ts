import type {TimeZoneInformation} from './timeZoneInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeZoneInformation(writer: SerializationWriter, timeZoneInformation: TimeZoneInformation | undefined = {} as TimeZoneInformation) : void {
        writer.writeStringValue("alias", timeZoneInformation.alias);
        writer.writeStringValue("displayName", timeZoneInformation.displayName);
        writer.writeStringValue("@odata.type", timeZoneInformation.odataType);
        writer.writeAdditionalData(timeZoneInformation.additionalData);
}
