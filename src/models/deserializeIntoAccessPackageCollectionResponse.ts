import { type AccessPackage } from './accessPackage';
import { type AccessPackageCollectionResponse } from './accessPackageCollectionResponse';
import { createAccessPackageFromDiscriminatorValue } from './createAccessPackageFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackage } from './serializeAccessPackage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCollectionResponse(accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {} as AccessPackageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageCollectionResponse),
        "value": n => { accessPackageCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
    }
}
