import {serializeSite} from '../../models/serializeSite';
import {Site} from '../../models/site';
import {RemovePostRequestBody} from './removePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemovePostRequestBody(writer: SerializationWriter, removePostRequestBody: RemovePostRequestBody | undefined = {} as RemovePostRequestBody) : void {
        writer.writeCollectionOfObjectValues<Site>("value", removePostRequestBody.value, serializeSite);
        writer.writeAdditionalData(removePostRequestBody.additionalData);
}
