import {deserializeIntoManagedEBookCollectionResponse} from './deserializeIntoManagedEBookCollectionResponse';
import {ManagedEBookCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedEBookCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedEBookCollectionResponse;
}
