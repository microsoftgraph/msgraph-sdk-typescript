import {deserializeIntoParseExpressionPostRequestBody} from './deserializeIntoParseExpressionPostRequestBody';
import {ParseExpressionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParseExpressionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParseExpressionPostRequestBody;
}
