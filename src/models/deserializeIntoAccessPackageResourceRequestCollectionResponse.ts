import type {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import type {AccessPackageResourceRequestCollectionResponse} from './accessPackageResourceRequestCollectionResponse';
import {createAccessPackageResourceRequestFromDiscriminatorValue} from './createAccessPackageResourceRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageResourceRequest} from './serializeAccessPackageResourceRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageResourceRequestCollectionResponse(accessPackageResourceRequestCollectionResponse: AccessPackageResourceRequestCollectionResponse | undefined = {} as AccessPackageResourceRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageResourceRequestCollectionResponse),
        "value": n => { accessPackageResourceRequestCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackageResourceRequest>(createAccessPackageResourceRequestFromDiscriminatorValue); },
    }
}
