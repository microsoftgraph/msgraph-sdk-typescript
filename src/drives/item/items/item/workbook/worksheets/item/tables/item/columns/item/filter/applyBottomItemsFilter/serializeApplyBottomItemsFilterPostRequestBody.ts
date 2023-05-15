import {ApplyBottomItemsFilterPostRequestBody} from './applyBottomItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyBottomItemsFilterPostRequestBody(writer: SerializationWriter, applyBottomItemsFilterPostRequestBody: ApplyBottomItemsFilterPostRequestBody | undefined = {} as ApplyBottomItemsFilterPostRequestBody) : void {
        writer.writeNumberValue("count", applyBottomItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyBottomItemsFilterPostRequestBody.additionalData);
}
