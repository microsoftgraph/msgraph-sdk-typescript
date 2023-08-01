import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleRequest} from '../../../../models/serializeUnifiedRoleAssignmentScheduleRequest';
import type {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/unifiedRoleAssignmentScheduleRequest';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequest>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleAssignmentScheduleRequest);
}
