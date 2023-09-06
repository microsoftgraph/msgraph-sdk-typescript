import { deserializeIntoCoupDayBsPostRequestBody } from './deserializeIntoCoupDayBsPostRequestBody';
import { type CoupDayBsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCoupDayBsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupDayBsPostRequestBody;
}
