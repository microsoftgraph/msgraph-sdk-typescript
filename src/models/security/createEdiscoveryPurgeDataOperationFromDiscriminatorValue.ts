import { deserializeIntoEdiscoveryPurgeDataOperation } from './deserializeIntoEdiscoveryPurgeDataOperation';
import { type EdiscoveryPurgeDataOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryPurgeDataOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryPurgeDataOperation;
}
