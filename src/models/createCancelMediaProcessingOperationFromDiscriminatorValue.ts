import { deserializeIntoCancelMediaProcessingOperation } from './deserializeIntoCancelMediaProcessingOperation';
import { type CancelMediaProcessingOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCancelMediaProcessingOperation;
}
