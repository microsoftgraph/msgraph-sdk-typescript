import { type DismissPostRequestBody } from './dismissPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDismissPostRequestBody(writer: SerializationWriter, dismissPostRequestBody: DismissPostRequestBody | undefined = {} as DismissPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("userIds", dismissPostRequestBody.userIds);
        writer.writeAdditionalData(dismissPostRequestBody.additionalData);
}
