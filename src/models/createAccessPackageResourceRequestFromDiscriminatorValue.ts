import {deserializeIntoAccessPackageResourceRequest} from './deserializeIntoAccessPackageResourceRequest';
import {AccessPackageResourceRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceRequest;
}
