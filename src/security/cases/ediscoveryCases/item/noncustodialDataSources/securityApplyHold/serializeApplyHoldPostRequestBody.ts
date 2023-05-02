import {ApplyHoldPostRequestBody} from './applyHoldPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyHoldPostRequestBody(writer: SerializationWriter, applyHoldPostRequestBody: ApplyHoldPostRequestBody | undefined = {} as ApplyHoldPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("ids", applyHoldPostRequestBody.ids);
        writer.writeAdditionalData(applyHoldPostRequestBody.additionalData);
}
