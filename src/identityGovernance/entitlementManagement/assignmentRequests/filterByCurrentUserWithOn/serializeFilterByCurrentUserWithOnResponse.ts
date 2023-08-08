import type {AccessPackageAssignmentRequest} from '../../../../models/accessPackageAssignmentRequest';
import {serializeAccessPackageAssignmentRequest} from '../../../../models/serializeAccessPackageAssignmentRequest';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("value", filterByCurrentUserWithOnResponse.value, serializeAccessPackageAssignmentRequest);
}
