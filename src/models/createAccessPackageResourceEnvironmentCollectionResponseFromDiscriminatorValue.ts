import {deserializeIntoAccessPackageResourceEnvironmentCollectionResponse} from './deserializeIntoAccessPackageResourceEnvironmentCollectionResponse';
import {AccessPackageResourceEnvironmentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceEnvironmentCollectionResponse;
}
