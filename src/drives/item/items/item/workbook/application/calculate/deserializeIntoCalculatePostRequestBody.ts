import { type CalculatePostRequestBody } from './calculatePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCalculatePostRequestBody(calculatePostRequestBody: CalculatePostRequestBody | undefined = {} as CalculatePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "calculationType": n => { calculatePostRequestBody.calculationType = n.getStringValue(); },
    }
}
