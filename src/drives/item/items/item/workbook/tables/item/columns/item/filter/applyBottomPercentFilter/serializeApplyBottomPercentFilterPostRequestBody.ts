import { type ApplyBottomPercentFilterPostRequestBody } from './applyBottomPercentFilterPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplyBottomPercentFilterPostRequestBody(writer: SerializationWriter, applyBottomPercentFilterPostRequestBody: ApplyBottomPercentFilterPostRequestBody | undefined = {} as ApplyBottomPercentFilterPostRequestBody) : void {
        writer.writeNumberValue("percent", applyBottomPercentFilterPostRequestBody.percent);
        writer.writeAdditionalData(applyBottomPercentFilterPostRequestBody.additionalData);
}
