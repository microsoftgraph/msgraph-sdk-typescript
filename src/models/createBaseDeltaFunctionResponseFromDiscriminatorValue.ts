import { deserializeIntoBaseDeltaFunctionResponse } from './deserializeIntoBaseDeltaFunctionResponse';
import { type BaseDeltaFunctionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBaseDeltaFunctionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBaseDeltaFunctionResponse;
}
