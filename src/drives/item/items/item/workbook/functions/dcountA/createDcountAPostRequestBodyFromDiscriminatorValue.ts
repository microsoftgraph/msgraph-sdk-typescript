import { deserializeIntoDcountAPostRequestBody } from './deserializeIntoDcountAPostRequestBody';
import { type DcountAPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDcountAPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDcountAPostRequestBody;
}
