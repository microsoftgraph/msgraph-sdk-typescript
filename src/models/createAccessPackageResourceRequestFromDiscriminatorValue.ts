import { deserializeIntoAccessPackageResourceRequest } from './deserializeIntoAccessPackageResourceRequest';
import { type AccessPackageResourceRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRequest;
}
