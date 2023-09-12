import { deserializeIntoDollarDePostRequestBody } from './deserializeIntoDollarDePostRequestBody';
import { type DollarDePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDollarDePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDollarDePostRequestBody;
}
