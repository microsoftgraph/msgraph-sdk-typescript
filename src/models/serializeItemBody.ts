import { BodyType } from './bodyType';
import { type ItemBody } from './itemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemBody(writer: SerializationWriter, itemBody: ItemBody | undefined = {} as ItemBody) : void {
        writer.writeStringValue("content", itemBody.content);
        writer.writeEnumValue<BodyType>("contentType", itemBody.contentType);
        writer.writeStringValue("@odata.type", itemBody.odataType);
        writer.writeAdditionalData(itemBody.additionalData);
}
