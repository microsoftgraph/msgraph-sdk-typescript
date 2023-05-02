import {deserializeIntoConnectionOperation} from './deserializeIntoConnectionOperation';
import {ConnectionOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectionOperation;
}
