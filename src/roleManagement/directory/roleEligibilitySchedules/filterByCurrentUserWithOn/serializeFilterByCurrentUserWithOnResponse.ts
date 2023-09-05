import { serializeBaseCollectionPaginationCountResponse } from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilitySchedule } from '../../../../models/serializeUnifiedRoleEligibilitySchedule';
import { type UnifiedRoleEligibilitySchedule } from '../../../../models/unifiedRoleEligibilitySchedule';
import { type FilterByCurrentUserWithOnResponse } from './filterByCurrentUserWithOnResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleEligibilitySchedule);
}
