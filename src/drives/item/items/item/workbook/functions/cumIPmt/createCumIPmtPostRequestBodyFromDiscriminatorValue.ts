import { deserializeIntoCumIPmtPostRequestBody } from './deserializeIntoCumIPmtPostRequestBody';
import { type CumIPmtPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCumIPmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCumIPmtPostRequestBody;
}
