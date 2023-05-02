import {deserializeIntoManagedAppStatusCollectionResponse} from './deserializeIntoManagedAppStatusCollectionResponse';
import {ManagedAppStatusCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppStatusCollectionResponse;
}
