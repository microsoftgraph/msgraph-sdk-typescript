import {deserializeIntoManagedAppRegistrationCollectionResponse} from './deserializeIntoManagedAppRegistrationCollectionResponse';
import {ManagedAppRegistrationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedAppRegistrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedAppRegistrationCollectionResponse;
}
