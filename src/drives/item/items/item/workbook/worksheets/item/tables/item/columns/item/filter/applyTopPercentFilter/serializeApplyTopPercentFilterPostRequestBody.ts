import {ApplyTopPercentFilterPostRequestBody} from './applyTopPercentFilterPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTopPercentFilterPostRequestBody(applyTopPercentFilterPostRequestBody: ApplyTopPercentFilterPostRequestBody | undefined = {} as ApplyTopPercentFilterPostRequestBody, writer: SerializationWriter) : void {
        writer.writeNumberValue("percent", applyTopPercentFilterPostRequestBody.percent);
        writer.writeAdditionalData(applyTopPercentFilterPostRequestBody.additionalData);
}
