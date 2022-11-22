import {ManagedAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ManagedAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ManagedAppCollectionResponse();
}
