import { deserializeIntoUsdollarPostRequestBody } from './deserializeIntoUsdollarPostRequestBody';
import { type UsdollarPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUsdollarPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUsdollarPostRequestBody;
}
