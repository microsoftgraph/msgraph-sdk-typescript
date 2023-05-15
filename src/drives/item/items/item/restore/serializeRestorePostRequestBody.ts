import {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import {RestorePostRequestBody} from './restorePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRestorePostRequestBody(writer: SerializationWriter, restorePostRequestBody: RestorePostRequestBody | undefined = {} as RestorePostRequestBody) : void {
        writer.writeStringValue("name", restorePostRequestBody.name);
        writer.writeObjectValue<ItemReference>("parentReference", restorePostRequestBody.parentReference, serializeItemReference);
        writer.writeAdditionalData(restorePostRequestBody.additionalData);
}
