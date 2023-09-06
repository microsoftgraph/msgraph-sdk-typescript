import { type ApplyBottomItemsFilterPostRequestBody } from './applyBottomItemsFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyBottomItemsFilterPostRequestBody(writer: SerializationWriter, applyBottomItemsFilterPostRequestBody: ApplyBottomItemsFilterPostRequestBody | undefined = {} as ApplyBottomItemsFilterPostRequestBody) : void {
        writer.writeNumberValue("count", applyBottomItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyBottomItemsFilterPostRequestBody.additionalData);
}
