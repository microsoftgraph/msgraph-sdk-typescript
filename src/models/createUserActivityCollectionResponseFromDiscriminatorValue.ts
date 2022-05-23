import {UserActivityCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserActivityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserActivityCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserActivityCollectionResponseImpl();
}
