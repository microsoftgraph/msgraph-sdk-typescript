import {deserializeIntoExpressionInputObject} from './deserializeIntoExpressionInputObject';
import {ExpressionInputObject} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExpressionInputObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExpressionInputObject;
}
