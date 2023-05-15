import {AccessPackageAssignmentRequestRequirements} from '../../../../../models/accessPackageAssignmentRequestRequirements';
import {createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue} from '../../../../../models/createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageAssignmentRequestRequirements} from '../../../../../models/serializeAccessPackageAssignmentRequestRequirements';
import {GetApplicablePolicyRequirementsResponse} from './getApplicablePolicyRequirementsResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetApplicablePolicyRequirementsResponse(getApplicablePolicyRequirementsResponse: GetApplicablePolicyRequirementsResponse | undefined = {} as GetApplicablePolicyRequirementsResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getApplicablePolicyRequirementsResponse),
        "value": n => { getApplicablePolicyRequirementsResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignmentRequestRequirements>(createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue); },
    }
}
