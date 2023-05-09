import {deserializeIntoCancelMediaProcessingOperation} from './deserializeIntoCancelMediaProcessingOperation';
import {CancelMediaProcessingOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCancelMediaProcessingOperation;
}
