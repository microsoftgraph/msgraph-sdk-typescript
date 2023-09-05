import { deserializeIntoCoupNcdPostRequestBody } from './deserializeIntoCoupNcdPostRequestBody';
import { type CoupNcdPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCoupNcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupNcdPostRequestBody;
}
