import {AccessPackage} from './accessPackage';
import {AccessPackageCollectionResponse} from './accessPackageCollectionResponse';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackage} from './serializeAccessPackage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessPackageCollectionResponse(accessPackageCollectionResponse: AccessPackageCollectionResponse | undefined = {} as AccessPackageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessPackageCollectionResponse),
        "value": n => { accessPackageCollectionResponse.value = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
    }
}
