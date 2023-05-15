import {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {createAccessPackageAssignmentFromDiscriminatorValue} from '../../../../models/createAccessPackageAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import {AdditionalAccessResponse} from './additionalAccessResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdditionalAccessResponse(additionalAccessResponse: AdditionalAccessResponse | undefined = {} as AdditionalAccessResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(additionalAccessResponse),
        "value": n => { additionalAccessResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
    }
}
