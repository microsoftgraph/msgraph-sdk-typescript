import type {ConfirmCompromisedPostRequestBody} from './confirmCompromisedPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfirmCompromisedPostRequestBody(writer: SerializationWriter, confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("userIds", confirmCompromisedPostRequestBody.userIds);
        writer.writeAdditionalData(confirmCompromisedPostRequestBody.additionalData);
}
