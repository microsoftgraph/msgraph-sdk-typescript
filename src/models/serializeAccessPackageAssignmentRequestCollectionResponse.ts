import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageAssignmentRequestCollectionResponse} from './accessPackageAssignmentRequestCollectionResponse';
import {serializeAccessPackageAssignmentRequest} from './serializeAccessPackageAssignmentRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentRequestCollectionResponse(accessPackageAssignmentRequestCollectionResponse: AccessPackageAssignmentRequestCollectionResponse | undefined = {} as AccessPackageAssignmentRequestCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("value", accessPackageAssignmentRequestCollectionResponse.value, serializeAccessPackageAssignmentRequest);
}
