import { deserializeIntoDeltaResponse } from './deserializeIntoDeltaResponse';
import { type DeltaResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeltaResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeltaResponse;
}
