import { deserializeIntoEdiscoveryIndexOperation } from './deserializeIntoEdiscoveryIndexOperation';
import { type EdiscoveryIndexOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryIndexOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryIndexOperation;
}
