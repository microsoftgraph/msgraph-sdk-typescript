import {EdiscoveryPurgeDataOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryPurgeDataOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryPurgeDataOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryPurgeDataOperation();
}
