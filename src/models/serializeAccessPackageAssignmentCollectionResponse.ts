import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentCollectionResponse} from './accessPackageAssignmentCollectionResponse';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentCollectionResponse(accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {} as AccessPackageAssignmentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", accessPackageAssignmentCollectionResponse.value, serializeAccessPackageAssignment);
}
