import {SyncPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncPostRequestBodyImpl();
}
