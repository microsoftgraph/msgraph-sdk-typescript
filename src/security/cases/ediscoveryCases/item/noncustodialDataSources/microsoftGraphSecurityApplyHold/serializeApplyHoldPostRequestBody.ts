import {ApplyHoldPostRequestBody} from './applyHoldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyHoldPostRequestBody(applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {} as ApplyHoldPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", applyHoldPostRequestBody.ids);
        writer.writeAdditionalData(applyHoldPostRequestBody.additionalData);
}
