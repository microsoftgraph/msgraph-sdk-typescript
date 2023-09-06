import { deserializeIntoExpressionInputObject } from './deserializeIntoExpressionInputObject';
import { type ExpressionInputObject } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExpressionInputObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpressionInputObject;
}
