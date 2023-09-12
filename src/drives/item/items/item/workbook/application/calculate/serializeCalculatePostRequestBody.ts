import { type CalculatePostRequestBody } from './calculatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalculatePostRequestBody(writer: SerializationWriter, calculatePostRequestBody: CalculatePostRequestBody | undefined = {} as CalculatePostRequestBody) : void {
        writer.writeStringValue("calculationType", calculatePostRequestBody.calculationType);
        writer.writeAdditionalData(calculatePostRequestBody.additionalData);
}
