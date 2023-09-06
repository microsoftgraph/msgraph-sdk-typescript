import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUnifiedRoleEligibilityScheduleRequest } from './serializeUnifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequest } from './unifiedRoleEligibilityScheduleRequest';
import { type UnifiedRoleEligibilityScheduleRequestCollectionResponse } from './unifiedRoleEligibilityScheduleRequestCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>("value", unifiedRoleEligibilityScheduleRequestCollectionResponse.value, serializeUnifiedRoleEligibilityScheduleRequest);
}
