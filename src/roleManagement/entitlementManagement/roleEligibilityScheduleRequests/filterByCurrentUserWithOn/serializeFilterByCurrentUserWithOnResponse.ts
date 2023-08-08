import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleRequest} from '../../../../models/serializeUnifiedRoleEligibilityScheduleRequest';
import type {UnifiedRoleEligibilityScheduleRequest} from '../../../../models/unifiedRoleEligibilityScheduleRequest';
import type {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleEligibilityScheduleRequest);
}
