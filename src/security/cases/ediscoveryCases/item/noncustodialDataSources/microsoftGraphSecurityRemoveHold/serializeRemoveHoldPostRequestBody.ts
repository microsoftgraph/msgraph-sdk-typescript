import type {RemoveHoldPostRequestBody} from './removeHoldPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveHoldPostRequestBody(writer: SerializationWriter, removeHoldPostRequestBody: RemoveHoldPostRequestBody | undefined = {} as RemoveHoldPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", removeHoldPostRequestBody.ids);
        writer.writeAdditionalData(removeHoldPostRequestBody.additionalData);
}
