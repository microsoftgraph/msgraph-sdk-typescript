import {deserializeIntoRichLongRunningOperation} from './deserializeIntoRichLongRunningOperation';
import {RichLongRunningOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRichLongRunningOperation;
}
