import {AccessPackage} from './accessPackage';
import {AccessPackageCollectionResponse} from './accessPackageCollectionResponse';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCollectionResponse(accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {} as AccessPackageCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackage>("value", accessPackageCollectionResponse.value, serializeAccessPackage);
}
