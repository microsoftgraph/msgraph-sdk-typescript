import {ApplyBottomItemsFilterPostRequestBody} from './applyBottomItemsFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyBottomItemsFilterPostRequestBody(applyBottomItemsFilterPostRequestBody: ApplyBottomItemsFilterPostRequestBody | undefined = {} as ApplyBottomItemsFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeNumberValue("count", applyBottomItemsFilterPostRequestBody.count);
        writer.writeAdditionalData(applyBottomItemsFilterPostRequestBody.additionalData);
}
