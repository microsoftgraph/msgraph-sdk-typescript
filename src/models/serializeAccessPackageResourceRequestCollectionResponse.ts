import type {AccessPackageResourceRequest} from './accessPackageResourceRequest';
import type {AccessPackageResourceRequestCollectionResponse} from './accessPackageResourceRequestCollectionResponse';
import {serializeAccessPackageResourceRequest} from './serializeAccessPackageResourceRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceRequestCollectionResponse(writer: SerializationWriter, accessPackageResourceRequestCollectionResponse: AccessPackageResourceRequestCollectionResponse | undefined = {} as AccessPackageResourceRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResourceRequest>("value", accessPackageResourceRequestCollectionResponse.value, serializeAccessPackageResourceRequest);
}
