import { deserializeIntoAccessPackageResourceEnvironmentCollectionResponse } from './deserializeIntoAccessPackageResourceEnvironmentCollectionResponse';
import { type AccessPackageResourceEnvironmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceEnvironmentCollectionResponse;
}
