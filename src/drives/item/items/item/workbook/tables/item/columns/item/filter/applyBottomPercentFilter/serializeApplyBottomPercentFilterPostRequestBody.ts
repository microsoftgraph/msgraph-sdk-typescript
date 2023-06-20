import {ApplyBottomPercentFilterPostRequestBody} from './applyBottomPercentFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyBottomPercentFilterPostRequestBody(applyBottomPercentFilterPostRequestBody: ApplyBottomPercentFilterPostRequestBody | undefined = {} as ApplyBottomPercentFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeNumberValue("percent", applyBottomPercentFilterPostRequestBody.percent);
        writer.writeAdditionalData(applyBottomPercentFilterPostRequestBody.additionalData);
}
