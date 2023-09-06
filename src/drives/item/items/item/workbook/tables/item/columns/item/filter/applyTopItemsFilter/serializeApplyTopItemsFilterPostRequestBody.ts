import { type ApplyTopItemsFilterPostRequestBody } from './applyTopItemsFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyTopItemsFilterPostRequestBody(writer: SerializationWriter, applyTopItemsFilterPostRequestBody: ApplyTopItemsFilterPostRequestBody | undefined = {} as ApplyTopItemsFilterPostRequestBody) : void {
        writer.writeNumberValue("count", applyTopItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyTopItemsFilterPostRequestBody.additionalData);
}
