import {ApplyTopItemsFilterPostRequestBody} from './applyTopItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTopItemsFilterPostRequestBody(writer: SerializationWriter, applyTopItemsFilterPostRequestBody: ApplyTopItemsFilterPostRequestBody | undefined = {} as ApplyTopItemsFilterPostRequestBody) : void {
        writer.writeNumberValue("count", applyTopItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyTopItemsFilterPostRequestBody.additionalData);
}
