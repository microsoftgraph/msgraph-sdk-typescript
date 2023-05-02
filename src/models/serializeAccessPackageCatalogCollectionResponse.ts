import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogCollectionResponse} from './accessPackageCatalogCollectionResponse';
import {serializeAccessPackageCatalog} from './serializeAccessPackageCatalog';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCatalogCollectionResponse(writer: SerializationWriter, accessPackageCatalogCollectionResponse: AccessPackageCatalogCollectionResponse | undefined = {} as AccessPackageCatalogCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCatalogCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("value", accessPackageCatalogCollectionResponse.value, serializeAccessPackageCatalog);
}
