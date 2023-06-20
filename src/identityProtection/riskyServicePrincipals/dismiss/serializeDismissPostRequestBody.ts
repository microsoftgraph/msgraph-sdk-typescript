import {DismissPostRequestBody} from './dismissPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDismissPostRequestBody(dismissPostRequestBody: DismissPostRequestBody | undefined = {} as DismissPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("servicePrincipalIds", dismissPostRequestBody.servicePrincipalIds);
        writer.writeAdditionalData(dismissPostRequestBody.additionalData);
}
