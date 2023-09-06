import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilityScheduleInstance } from './serializeUnifiedRoleEligibilityScheduleInstance';
import { type UnifiedRoleEligibilityScheduleInstance } from './unifiedRoleEligibilityScheduleInstance';
import { type UnifiedRoleEligibilityScheduleInstanceCollectionResponse } from './unifiedRoleEligibilityScheduleInstanceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleInstanceCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleInstanceCollectionResponse: UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleInstanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleInstanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleInstance>("value", unifiedRoleEligibilityScheduleInstanceCollectionResponse.value, serializeUnifiedRoleEligibilityScheduleInstance);
}
