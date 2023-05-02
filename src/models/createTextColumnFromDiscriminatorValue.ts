import {deserializeIntoTextColumn} from './deserializeIntoTextColumn';
import {TextColumn} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTextColumnFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTextColumn;
}
