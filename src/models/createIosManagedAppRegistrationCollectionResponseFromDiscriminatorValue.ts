import {IosManagedAppRegistrationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosManagedAppRegistrationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosManagedAppRegistrationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosManagedAppRegistrationCollectionResponse();
}
