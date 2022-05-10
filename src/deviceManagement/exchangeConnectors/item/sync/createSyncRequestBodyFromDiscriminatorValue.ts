import {SyncRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSyncRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SyncRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SyncRequestBodyImpl();
}
