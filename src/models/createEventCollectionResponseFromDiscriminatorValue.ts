import {EventCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventCollectionResponseImpl();
}
