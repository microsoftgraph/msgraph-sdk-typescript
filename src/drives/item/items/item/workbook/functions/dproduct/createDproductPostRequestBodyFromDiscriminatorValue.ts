import { deserializeIntoDproductPostRequestBody } from './deserializeIntoDproductPostRequestBody';
import { type DproductPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDproductPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDproductPostRequestBody;
}
