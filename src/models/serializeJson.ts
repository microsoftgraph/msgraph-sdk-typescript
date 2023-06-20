import {Json} from './json';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJson(json: Json | undefined = {} as Json, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", json.odataType);
        writer.writeAdditionalData(json.additionalData);
}
