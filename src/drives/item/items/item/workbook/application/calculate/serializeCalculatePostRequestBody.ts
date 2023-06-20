import {CalculatePostRequestBody} from './calculatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalculatePostRequestBody(calculatePostRequestBody: CalculatePostRequestBody | undefined = {} as CalculatePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("calculationType", calculatePostRequestBody.calculationType);
        writer.writeAdditionalData(calculatePostRequestBody.additionalData);
}
