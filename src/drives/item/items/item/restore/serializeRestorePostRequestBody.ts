import type {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import type {RestorePostRequestBody} from './restorePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRestorePostRequestBody(writer: SerializationWriter, restorePostRequestBody: RestorePostRequestBody | undefined = {} as RestorePostRequestBody) : void {
        writer.writeStringValue("name", restorePostRequestBody.name);
        writer.writeObjectValue<ItemReference>("parentReference", restorePostRequestBody.parentReference, serializeItemReference);
        writer.writeAdditionalData(restorePostRequestBody.additionalData);
}
