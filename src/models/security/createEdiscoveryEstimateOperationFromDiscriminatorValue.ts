import { deserializeIntoEdiscoveryEstimateOperation } from './deserializeIntoEdiscoveryEstimateOperation';
import { type EdiscoveryEstimateOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryEstimateOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryEstimateOperation;
}
