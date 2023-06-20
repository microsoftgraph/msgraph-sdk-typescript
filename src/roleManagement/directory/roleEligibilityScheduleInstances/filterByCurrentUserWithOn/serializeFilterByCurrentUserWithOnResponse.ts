import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleInstance} from '../../../../models/serializeUnifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from '../../../../models/unifiedRoleEligibilityScheduleInstance';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleEligibilityScheduleInstance);
}
