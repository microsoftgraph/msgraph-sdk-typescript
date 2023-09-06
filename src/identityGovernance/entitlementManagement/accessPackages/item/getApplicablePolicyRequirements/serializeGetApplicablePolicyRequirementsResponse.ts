import { type AccessPackageAssignmentRequestRequirements } from '../../../../../models/accessPackageAssignmentRequestRequirements';
import { serializeAccessPackageAssignmentRequestRequirements } from '../../../../../models/serializeAccessPackageAssignmentRequestRequirements';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type GetApplicablePolicyRequirementsResponse } from './getApplicablePolicyRequirementsResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetApplicablePolicyRequirementsResponse(writer: SerializationWriter, getApplicablePolicyRequirementsResponse: GetApplicablePolicyRequirementsResponse | undefined = {} as GetApplicablePolicyRequirementsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicablePolicyRequirementsResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestRequirements>("value", getApplicablePolicyRequirementsResponse.value, serializeAccessPackageAssignmentRequestRequirements);
}
