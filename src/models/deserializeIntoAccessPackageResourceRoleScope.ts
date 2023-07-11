import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {createAccessPackageResourceRoleFromDiscriminatorValue} from './createAccessPackageResourceRoleFromDiscriminatorValue';
import {createAccessPackageResourceScopeFromDiscriminatorValue} from './createAccessPackageResourceScopeFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRoleScope(accessPackageResourceRoleScope: AccessPackageResourceRoleScope | undefined = {} as AccessPackageResourceRoleScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(accessPackageResourceRoleScope),
        "createdDateTime": n => { accessPackageResourceRoleScope.createdDateTime = n.getDateValue(); },
        "role": n => { accessPackageResourceRoleScope.role = n.getObjectValue<AccessPackageResourceRole>(createAccessPackageResourceRoleFromDiscriminatorValue); },
        "scope": n => { accessPackageResourceRoleScope.scope = n.getObjectValue<AccessPackageResourceScope>(createAccessPackageResourceScopeFromDiscriminatorValue); },
    }
}
