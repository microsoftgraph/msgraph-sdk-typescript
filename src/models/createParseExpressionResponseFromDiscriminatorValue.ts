import { deserializeIntoParseExpressionResponse } from './deserializeIntoParseExpressionResponse';
import { type ParseExpressionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createParseExpressionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoParseExpressionResponse;
}
