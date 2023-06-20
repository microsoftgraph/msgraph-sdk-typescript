import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<Site>("value", addPostRequestBody.value, serializeSite);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
