import { deserializeIntoEdiscoveryHoldOperation } from './deserializeIntoEdiscoveryHoldOperation';
import { type EdiscoveryHoldOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryHoldOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryHoldOperation;
}
