import { type AccessPackageAssignmentRequest } from '../../../../models/accessPackageAssignmentRequest';
import { createAccessPackageAssignmentRequestFromDiscriminatorValue } from '../../../../models/createAccessPackageAssignmentRequestFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeAccessPackageAssignmentRequest } from '../../../../models/serializeAccessPackageAssignmentRequest';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(filterByCurrentUserWithOnResponse),
        "value": n => { filterByCurrentUserWithOnResponse.value = n.getCollectionOfObjectValues<AccessPackageAssignmentRequest>(createAccessPackageAssignmentRequestFromDiscriminatorValue); },
    }
}
