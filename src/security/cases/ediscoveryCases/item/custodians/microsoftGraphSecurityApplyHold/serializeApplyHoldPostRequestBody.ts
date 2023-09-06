import { type ApplyHoldPostRequestBody } from './applyHoldPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyHoldPostRequestBody(writer: SerializationWriter, applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {} as ApplyHoldPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", applyHoldPostRequestBody.ids);
        writer.writeAdditionalData(applyHoldPostRequestBody.additionalData);
}
