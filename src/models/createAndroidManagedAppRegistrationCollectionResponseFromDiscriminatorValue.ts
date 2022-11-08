import {AndroidManagedAppRegistrationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAndroidManagedAppRegistrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AndroidManagedAppRegistrationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AndroidManagedAppRegistrationCollectionResponse();
}
