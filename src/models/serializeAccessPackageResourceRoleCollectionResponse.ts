import { type AccessPackageResourceRole } from './accessPackageResourceRole';
import { type AccessPackageResourceRoleCollectionResponse } from './accessPackageResourceRoleCollectionResponse';
import { serializeAccessPackageResourceRole } from './serializeAccessPackageResourceRole';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRoleCollectionResponse(writer: SerializationWriter, accessPackageResourceRoleCollectionResponse: AccessPackageResourceRoleCollectionResponse | undefined = {} as AccessPackageResourceRoleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceRoleCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceRole>("value", accessPackageResourceRoleCollectionResponse.value, serializeAccessPackageResourceRole);
}
