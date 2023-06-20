import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogCollectionResponse} from './accessPackageCatalogCollectionResponse';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalogCollectionResponse(accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {} as AccessPackageCatalogCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCatalogCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("value", accessPackageCatalogCollectionResponse.value, serializeAccessPackageCatalog);
}
