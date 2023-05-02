import {deserializeIntoEdiscoveryEstimateOperation} from './deserializeIntoEdiscoveryEstimateOperation';
import {EdiscoveryEstimateOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryEstimateOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryEstimateOperation;
}
