import {AccessPackageResourceScope} from './accessPackageResourceScope';
import {AccessPackageResourceScopeCollectionResponse} from './accessPackageResourceScopeCollectionResponse';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceScopeCollectionResponse(writer: SerializationWriter, accessPackageResourceScopeCollectionResponse: AccessPackageResourceScopeCollectionResponse | undefined = {} as AccessPackageResourceScopeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceScopeCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceScope>("value", accessPackageResourceScopeCollectionResponse.value, serializeAccessPackageResourceScope);
}
