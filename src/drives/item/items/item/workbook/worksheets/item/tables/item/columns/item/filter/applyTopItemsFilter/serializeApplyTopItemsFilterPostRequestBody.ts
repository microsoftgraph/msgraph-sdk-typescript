import {ApplyTopItemsFilterPostRequestBody} from './applyTopItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTopItemsFilterPostRequestBody(applyTopItemsFilterPostRequestBody: ApplyTopItemsFilterPostRequestBody | undefined = {} as ApplyTopItemsFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeNumberValue("count", applyTopItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyTopItemsFilterPostRequestBody.additionalData);
}
