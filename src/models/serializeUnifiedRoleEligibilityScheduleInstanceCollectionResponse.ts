import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleInstance} from './serializeUnifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstance} from './unifiedRoleEligibilityScheduleInstance';
import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from './unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleInstanceCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleInstanceCollectionResponse: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("value", unifiedRoleEligibilityScheduleInstanceCollectionResponse.value, serializeUnifiedRoleEligibilityScheduleInstance);
}
