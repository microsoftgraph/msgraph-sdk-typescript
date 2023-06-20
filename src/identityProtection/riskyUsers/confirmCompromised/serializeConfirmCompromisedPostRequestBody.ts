import {ConfirmCompromisedPostRequestBody} from './confirmCompromisedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfirmCompromisedPostRequestBody(confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("userIds", confirmCompromisedPostRequestBody.userIds);
        writer.writeAdditionalData(confirmCompromisedPostRequestBody.additionalData);
}
