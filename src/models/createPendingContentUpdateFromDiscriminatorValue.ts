import {PendingContentUpdateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPendingContentUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : PendingContentUpdateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PendingContentUpdateImpl();
}
