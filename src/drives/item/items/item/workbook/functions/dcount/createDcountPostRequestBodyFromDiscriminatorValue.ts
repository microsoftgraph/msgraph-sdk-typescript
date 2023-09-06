import { deserializeIntoDcountPostRequestBody } from './deserializeIntoDcountPostRequestBody';
import { type DcountPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDcountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDcountPostRequestBody;
}
