import { deserializeIntoCoupDaysPostRequestBody } from './deserializeIntoCoupDaysPostRequestBody';
import { type CoupDaysPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCoupDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoupDaysPostRequestBody;
}
