import { serializeSite } from '../../../../models/serializeSite';
import { type Site } from '../../../../models/site';
import { type AddPostRequestBody } from './addPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<Site>("value", addPostRequestBody.value, serializeSite);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
