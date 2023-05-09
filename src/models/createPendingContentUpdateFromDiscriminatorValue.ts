import {deserializeIntoPendingContentUpdate} from './deserializeIntoPendingContentUpdate';
import {PendingContentUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPendingContentUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPendingContentUpdate;
}
