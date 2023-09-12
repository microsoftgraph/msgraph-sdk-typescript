import { type AccessPackageResource } from './accessPackageResource';
import { type AccessPackageResourceCollectionResponse } from './accessPackageResourceCollectionResponse';
import { createAccessPackageResourceFromDiscriminatorValue } from './createAccessPackageResourceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageResource } from './serializeAccessPackageResource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceCollectionResponse(accessPackageResourceCollectionResponse: AccessPackageResourceCollectionResponse | undefined = {} as AccessPackageResourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceCollectionResponse),
        "value": n => { accessPackageResourceCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResource>(createAccessPackageResourceFromDiscriminatorValue); },
    }
}
