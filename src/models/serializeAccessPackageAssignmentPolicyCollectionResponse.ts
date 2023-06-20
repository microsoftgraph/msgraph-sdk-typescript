import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentPolicyCollectionResponse} from './accessPackageAssignmentPolicyCollectionResponse';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentPolicyCollectionResponse(accessPackageAssignmentPolicyCollectionResponse: AccessPackageAssignmentPolicyCollectionResponse | undefined = {} as AccessPackageAssignmentPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("value", accessPackageAssignmentPolicyCollectionResponse.value, serializeAccessPackageAssignmentPolicy);
}
