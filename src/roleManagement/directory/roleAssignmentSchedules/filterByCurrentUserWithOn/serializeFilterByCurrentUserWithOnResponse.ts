import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentSchedule} from '../../../../models/serializeUnifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentSchedule} from '../../../../models/unifiedRoleAssignmentSchedule';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleAssignmentSchedule);
}
