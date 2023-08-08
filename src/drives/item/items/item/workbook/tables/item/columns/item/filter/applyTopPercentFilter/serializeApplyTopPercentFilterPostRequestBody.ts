import type {ApplyTopPercentFilterPostRequestBody} from './applyTopPercentFilterPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplyTopPercentFilterPostRequestBody(writer: SerializationWriter, applyTopPercentFilterPostRequestBody: ApplyTopPercentFilterPostRequestBody | undefined = {} as ApplyTopPercentFilterPostRequestBody) : void {
        writer.writeNumberValue("percent", applyTopPercentFilterPostRequestBody.percent);
        writer.writeAdditionalData(applyTopPercentFilterPostRequestBody.additionalData);
}
