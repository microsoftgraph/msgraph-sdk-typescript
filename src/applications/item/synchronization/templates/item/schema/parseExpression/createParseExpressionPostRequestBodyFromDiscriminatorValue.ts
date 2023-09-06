import { deserializeIntoParseExpressionPostRequestBody } from './deserializeIntoParseExpressionPostRequestBody';
import { type ParseExpressionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParseExpressionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParseExpressionPostRequestBody;
}
