import type {AccessPackageResourceScope} from './accessPackageResourceScope';
import type {AccessPackageResourceScopeCollectionResponse} from './accessPackageResourceScopeCollectionResponse';
import {serializeAccessPackageResourceScope} from './serializeAccessPackageResourceScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceScopeCollectionResponse(writer: SerializationWriter, accessPackageResourceScopeCollectionResponse: AccessPackageResourceScopeCollectionResponse | undefined = {} as AccessPackageResourceScopeCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceScopeCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceScope>("value", accessPackageResourceScopeCollectionResponse.value, serializeAccessPackageResourceScope);
}
