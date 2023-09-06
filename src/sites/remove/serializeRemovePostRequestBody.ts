import { serializeSite } from '../../models/serializeSite';
import { type Site } from '../../models/site';
import { type RemovePostRequestBody } from './removePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRemovePostRequestBody(writer: SerializationWriter, removePostRequestBody: RemovePostRequestBody | undefined = {} as RemovePostRequestBody) : void {
        writer.writeCollectionOfObjectValues<Site>("value", removePostRequestBody.value, serializeSite);
        writer.writeAdditionalData(removePostRequestBody.additionalData);
}
