import {AccessPackageResource} from './accessPackageResource';
import {AccessPackageResourceCollectionResponse} from './accessPackageResourceCollectionResponse';
import {serializeAccessPackageResource} from './serializeAccessPackageResource';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageResourceCollectionResponse(writer: SerializationWriter, accessPackageResourceCollectionResponse: AccessPackageResourceCollectionResponse | undefined = {} as AccessPackageResourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageResourceCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageResource>("value", accessPackageResourceCollectionResponse.value, serializeAccessPackageResource);
}
