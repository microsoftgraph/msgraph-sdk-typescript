import { deserializeIntoAccessPackageResourceScope } from './deserializeIntoAccessPackageResourceScope';
import { type AccessPackageResourceScope } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessPackageResourceScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessPackageResourceScope;
}
