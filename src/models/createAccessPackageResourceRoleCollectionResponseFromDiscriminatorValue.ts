import {deserializeIntoAccessPackageResourceRoleCollectionResponse} from './deserializeIntoAccessPackageResourceRoleCollectionResponse';
import {AccessPackageResourceRoleCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRoleCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRoleCollectionResponse;
}
