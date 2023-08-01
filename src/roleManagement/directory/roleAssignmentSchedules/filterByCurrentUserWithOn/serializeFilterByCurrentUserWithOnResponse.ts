import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleAssignmentSchedule} from '../../../../models/serializeUnifiedRoleAssignmentSchedule';
import type {UnifiedRoleAssignmentSchedule} from '../../../../models/unifiedRoleAssignmentSchedule';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentSchedule>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleAssignmentSchedule);
}
