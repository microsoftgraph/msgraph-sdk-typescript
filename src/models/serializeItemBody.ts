import {BodyType} from './bodyType';
import {ItemBody} from './itemBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemBody(itemBody: ItemBody | undefined = {} as ItemBody, writer: SerializationWriter) : void {
        writer.writeStringValue("content", itemBody.content);
        writer.writeEnumValue<BodyType>("contentType", itemBody.contentType);
        writer.writeStringValue("@odata.type", itemBody.odataType);
        writer.writeAdditionalData(itemBody.additionalData);
}
