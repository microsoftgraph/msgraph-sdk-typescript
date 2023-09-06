import { type ConfirmCompromisedPostRequestBody } from './confirmCompromisedPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConfirmCompromisedPostRequestBody(writer: SerializationWriter, confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("userIds", confirmCompromisedPostRequestBody.userIds);
        writer.writeAdditionalData(confirmCompromisedPostRequestBody.additionalData);
}
