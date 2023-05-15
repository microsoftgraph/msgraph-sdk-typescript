import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilitySchedule} from './serializeUnifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleCollectionResponse} from './unifiedRoleEligibilityScheduleCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleCollectionResponse: UnifiedRoleEligibilityScheduleCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilitySchedule>("value", unifiedRoleEligibilityScheduleCollectionResponse.value, serializeUnifiedRoleEligibilitySchedule);
}
