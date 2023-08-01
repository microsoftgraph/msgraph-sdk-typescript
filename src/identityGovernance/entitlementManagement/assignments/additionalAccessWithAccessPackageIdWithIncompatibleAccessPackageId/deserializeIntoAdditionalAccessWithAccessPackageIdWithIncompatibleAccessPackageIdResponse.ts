import type {AccessPackageAssignment} from '../../../../models/accessPackageAssignment';
import {createAccessPackageAssignmentFromDiscriminatorValue} from '../../../../models/createAccessPackageAssignmentFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeAccessPackageAssignment} from '../../../../models/serializeAccessPackageAssignment';
import type {AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse} from './additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse(additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse: AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse | undefined = {} as AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse),
        "value": n => { additionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
    }
}
