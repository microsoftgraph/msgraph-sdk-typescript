import {Json} from './json';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeJson(writer: SerializationWriter, json: Json | undefined = {} as Json) : void {
        writer.writeStringValue("@odata.type", json.odataType);
        writer.writeAdditionalData(json.additionalData);
}
