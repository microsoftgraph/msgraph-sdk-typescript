import {ManagedAppStatusCollectionResponse} from './managedAppStatusCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppStatusCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppStatusCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppStatusCollectionResponse();
}
