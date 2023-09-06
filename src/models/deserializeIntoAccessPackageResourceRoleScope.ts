import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceRoleScope } from './accessPackageResourceRoleScope';
import { type AccessPackageResourceScope } from './accessPackageResourceScope';
import { createAccessPackageResourceRoleFromDiscriminatorValue } from './createAccessPackageResourceRoleFromDiscriminatorValue';
import { createAccessPackageResourceScopeFromDiscriminatorValue } from './createAccessPackageResourceScopeFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeAccessPackageResourceRole } from './serializeAccessPackageResourceRole';
import { serializeAccessPackageResourceScope } from './serializeAccessPackageResourceScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleScope(accessPackageResourceRoleScope: AccessPackageResourceRoleScope | undefined = {} as AccessPackageResourceRoleScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceRoleScope),
        "createdDateTime": n => { accessPackageResourceRoleScope.createdDateTime = n.getDateValue(); },
        "role": n => { accessPackageResourceRoleScope.role = n.getObjectValue<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
        "scope": n => { accessPackageResourceRoleScope.scope = n.getObjectValue<AccessPackageResourceScope>(createAccessPackageResourceScopeFromDiscriminatorValue); },
    }
}
