import { deserializeIntoCoupDaysNcPostRequestBody } from './deserializeIntoCoupDaysNcPostRequestBody';
import { type CoupDaysNcPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCoupDaysNcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupDaysNcPostRequestBody;
}
