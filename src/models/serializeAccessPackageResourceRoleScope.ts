import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceRoleScope } from './accessPackageResourceRoleScope';
import { type AccessPackageResourceScope } from './accessPackageResourceScope';
import { serializeAccessPackageResourceRole } from './serializeAccessPackageResourceRole';
import { serializeAccessPackageResourceScope } from './serializeAccessPackageResourceScope';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRoleScope(writer: SerializationWriter, accessPackageResourceRoleScope: AccessPackageResourceRoleScope | undefined = {} as AccessPackageResourceRoleScope) : void {
        serializeEntity(writer, accessPackageResourceRoleScope)
        writer.writeDateValue("createdDateTime", accessPackageResourceRoleScope.createdDateTime);
        writer.writeObjectValue<AccessPackageResourceRole>("role", accessPackageResourceRoleScope.role, serializeAccessPackageResourceRole);
        writer.writeObjectValue<AccessPackageResourceScope>("scope", accessPackageResourceRoleScope.scope, serializeAccessPackageResourceScope);
}
