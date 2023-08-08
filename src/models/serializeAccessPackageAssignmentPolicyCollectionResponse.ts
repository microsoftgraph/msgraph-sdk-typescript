import type {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import type {AccessPackageAssignmentPolicyCollectionResponse} from './accessPackageAssignmentPolicyCollectionResponse';
import {serializeAccessPackageAssignmentPolicy} from './serializeAccessPackageAssignmentPolicy';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessPackageAssignmentPolicyCollectionResponse(writer: SerializationWriter, accessPackageAssignmentPolicyCollectionResponse: AccessPackageAssignmentPolicyCollectionResponse | undefined = {} as AccessPackageAssignmentPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, accessPackageAssignmentPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("value", accessPackageAssignmentPolicyCollectionResponse.value, serializeAccessPackageAssignmentPolicy);
}
