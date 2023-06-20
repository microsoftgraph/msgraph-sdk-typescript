import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentScheduleInstance} from '../../../../models/serializeUnifiedRoleAssignmentScheduleInstance';
import {UnifiedRoleAssignmentScheduleInstance} from '../../../../models/unifiedRoleAssignmentScheduleInstance';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleInstance>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleAssignmentScheduleInstance);
}
