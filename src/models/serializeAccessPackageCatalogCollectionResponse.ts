import { type AccessPackageCatalog } from './accessPackageCatalog';
import { type AccessPackageCatalogCollectionResponse } from './accessPackageCatalogCollectionResponse';
import { serializeAccessPackageCatalog } from './serializeAccessPackageCatalog';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalogCollectionResponse(writer: SerializationWriter, accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {} as AccessPackageCatalogCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCatalogCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("value", accessPackageCatalogCollectionResponse.value, serializeAccessPackageCatalog);
}
