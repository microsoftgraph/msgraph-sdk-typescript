import {ConnectionOperation} from './connectionOperation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectionOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConnectionOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConnectionOperation();
}
