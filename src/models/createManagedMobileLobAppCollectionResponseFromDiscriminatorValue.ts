import {deserializeIntoManagedMobileLobAppCollectionResponse} from './deserializeIntoManagedMobileLobAppCollectionResponse';
import {ManagedMobileLobAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileLobAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedMobileLobAppCollectionResponse;
}
