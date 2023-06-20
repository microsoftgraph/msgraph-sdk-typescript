import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilitySchedule} from '../../../../models/serializeUnifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilitySchedule} from '../../../../models/unifiedRoleEligibilitySchedule';
import {FilterByCurrentUserWithOnResponse} from './filterByCurrentUserWithOnResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {} as FilterByCurrentUserWithOnResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>("value", filterByCurrentUserWithOnResponse.value, serializeUnifiedRoleEligibilitySchedule);
}
