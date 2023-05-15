import {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';
import {serializeAccessPackageAssignmentRequestRequirements} from '../../../../../models/serializeAccessPackageAssignmentRequestRequirements';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {GetApplicablePolicyRequirementsResponse} from './getApplicablePolicyRequirementsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetApplicablePolicyRequirementsResponse(writer: SerializationWriter, getApplicablePolicyRequirementsResponse: GetApplicablePolicyRequirementsResponse | undefined = {} as GetApplicablePolicyRequirementsResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getApplicablePolicyRequirementsResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestRequirements>("value", getApplicablePolicyRequirementsResponse.value, serializeAccessPackageAssignmentRequestRequirements);
}
