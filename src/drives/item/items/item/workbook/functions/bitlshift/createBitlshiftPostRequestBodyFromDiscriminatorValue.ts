import { deserializeIntoBitlshiftPostRequestBody } from './deserializeIntoBitlshiftPostRequestBody';
import { type BitlshiftPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitlshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitlshiftPostRequestBody;
}
