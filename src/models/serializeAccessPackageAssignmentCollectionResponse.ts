import type {AccessPackageAssignment} from './accessPackageAssignment';
import type {AccessPackageAssignmentCollectionResponse} from './accessPackageAssignmentCollectionResponse';
import {serializeAccessPackageAssignment} from './serializeAccessPackageAssignment';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentCollectionResponse(writer: SerializationWriter, accessPackageAssignmentCollectionResponse: AccessPackageAssignmentCollectionResponse | undefined = {} as AccessPackageAssignmentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", accessPackageAssignmentCollectionResponse.value, serializeAccessPackageAssignment);
}
