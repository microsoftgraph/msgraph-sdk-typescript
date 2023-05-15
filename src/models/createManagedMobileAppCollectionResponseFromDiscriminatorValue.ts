import {deserializeIntoManagedMobileAppCollectionResponse} from './deserializeIntoManagedMobileAppCollectionResponse';
import {ManagedMobileAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createManagedMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoManagedMobileAppCollectionResponse;
}
