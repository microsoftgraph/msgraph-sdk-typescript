import type {UnarchivePostRequestBody} from './unarchivePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnarchivePostRequestBody(writer: SerializationWriter, unarchivePostRequestBody: UnarchivePostRequestBody | undefined = {} as UnarchivePostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("messageIds", unarchivePostRequestBody.messageIds);
        writer.writeAdditionalData(unarchivePostRequestBody.additionalData);
}
