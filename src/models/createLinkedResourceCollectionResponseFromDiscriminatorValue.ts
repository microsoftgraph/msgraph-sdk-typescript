import {LinkedResourceCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLinkedResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LinkedResourceCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LinkedResourceCollectionResponseImpl();
}
