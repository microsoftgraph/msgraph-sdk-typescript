import {UserCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserCollectionResponseImpl();
}
