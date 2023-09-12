import { deserializeIntoDeltaPostRequestBody } from './deserializeIntoDeltaPostRequestBody';
import { type DeltaPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeltaPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeltaPostRequestBody;
}
