import { deserializeIntoPmtPostRequestBody } from './deserializeIntoPmtPostRequestBody';
import { type PmtPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPmtPostRequestBody;
}
