import { type AccessPackageAssignmentRequest } from './accessPackageAssignmentRequest';
import { type AccessPackageAssignmentRequestCollectionResponse } from './accessPackageAssignmentRequestCollectionResponse';
import { serializeAccessPackageAssignmentRequest } from './serializeAccessPackageAssignmentRequest';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestCollectionResponse(writer: SerializationWriter, accessPackageAssignmentRequestCollectionResponse: AccessPackageAssignmentRequestCollectionResponse | undefined = {} as AccessPackageAssignmentRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("value", accessPackageAssignmentRequestCollectionResponse.value, serializeAccessPackageAssignmentRequest);
}
