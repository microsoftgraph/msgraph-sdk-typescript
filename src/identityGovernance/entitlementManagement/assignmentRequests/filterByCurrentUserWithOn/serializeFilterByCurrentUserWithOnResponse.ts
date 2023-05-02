import {AccessPackageAssignmentRequest} from '../../../../models/accessPackageAssignmentRequest';
import {serializeAccessPackageAssignmentRequest} from '../../../../models/serializeAccessPackageAssignmentRequest';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("value", filterByCurrentUserWithOnResponse.value, serializeAccessPackageAssignmentRequest);
}
