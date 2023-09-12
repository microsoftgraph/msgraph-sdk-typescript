import { type AccessPackageAssignment } from '../../../../models/accessPackageAssignment';
import { serializeAccessPackageAssignment } from '../../../../models/serializeAccessPackageAssignment';
import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("value", filterByCurrentUserWithOnResponse.value, serializeAccessPackageAssignment);
}
