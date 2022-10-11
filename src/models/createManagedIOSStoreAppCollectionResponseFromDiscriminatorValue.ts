import {ManagedIOSStoreAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedIOSStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedIOSStoreAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedIOSStoreAppCollectionResponse();
}
