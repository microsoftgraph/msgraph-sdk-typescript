import {ConfirmCompromisedPostRequestBody} from './confirmCompromisedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConfirmCompromisedPostRequestBody(confirmCompromisedPostRequestBody: ConfirmCompromisedPostRequestBody | undefined = {} as ConfirmCompromisedPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalIds", confirmCompromisedPostRequestBody.servicePrincipalIds);
        writer.writeAdditionalData(confirmCompromisedPostRequestBody.additionalData);
}
