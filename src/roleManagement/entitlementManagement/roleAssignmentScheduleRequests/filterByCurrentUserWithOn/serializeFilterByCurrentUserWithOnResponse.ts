import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleRequest} from '../../../../models/serializeUnifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/unifiedRoleAssignmentScheduleRequest';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleAssignmentScheduleRequest);
}
