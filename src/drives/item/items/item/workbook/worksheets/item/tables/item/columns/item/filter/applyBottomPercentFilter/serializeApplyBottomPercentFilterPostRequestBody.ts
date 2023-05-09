import {ApplyBottomPercentFilterPostRequestBody} from './applyBottomPercentFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyBottomPercentFilterPostRequestBody(writer: SerializationWriter, applyBottomPercentFilterPostRequestBody: ApplyBottomPercentFilterPostRequestBody | undefined = {} as ApplyBottomPercentFilterPostRequestBody) : void {
        writer.writeNumberValue("percent", applyBottomPercentFilterPostRequestBody.percent);
        writer.writeAdditionalData(applyBottomPercentFilterPostRequestBody.additionalData);
}
