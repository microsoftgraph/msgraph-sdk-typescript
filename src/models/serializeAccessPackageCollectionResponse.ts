import type {AccessPackage} from './accessPackage';
import type {AccessPackageCollectionResponse} from './accessPackageCollectionResponse';
import {serializeAccessPackage} from './serializeAccessPackage';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageCollectionResponse(writer: SerializationWriter, accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {} as AccessPackageCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackage>("value", accessPackageCollectionResponse.value, serializeAccessPackage);
}
