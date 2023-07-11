import {AccessPackageResourceRole} from './accessPackageResourceRole';
import {AccessPackageResourceRoleCollectionResponse} from './accessPackageResourceRoleCollectionResponse';
import {serializeAccessPackageResourceRole} from './serializeAccessPackageResourceRole';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRoleCollectionResponse(writer: SerializationWriter, accessPackageResourceRoleCollectionResponse: AccessPackageResourceRoleCollectionResponse | undefined = {} as AccessPackageResourceRoleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceRoleCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceRole>("value", accessPackageResourceRoleCollectionResponse.value, serializeAccessPackageResourceRole);
}
