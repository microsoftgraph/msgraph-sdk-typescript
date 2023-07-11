import {AccessPackageResourceRoleScope} from './accessPackageResourceRoleScope';
import {AccessPackageResourceRoleScopeCollectionResponse} from './accessPackageResourceRoleScopeCollectionResponse';
import {serializeAccessPackageResourceRoleScope} from './serializeAccessPackageResourceRoleScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRoleScopeCollectionResponse(writer: SerializationWriter, accessPackageResourceRoleScopeCollectionResponse: AccessPackageResourceRoleScopeCollectionResponse | undefined = {} as AccessPackageResourceRoleScopeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceRoleScopeCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceRoleScope>("value", accessPackageResourceRoleScopeCollectionResponse.value, serializeAccessPackageResourceRoleScope);
}
