import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilityScheduleRequest} from './serializeUnifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequest} from './unifiedRoleEligibilityScheduleRequest';
import {UnifiedRoleEligibilityScheduleRequestCollectionResponse} from './unifiedRoleEligibilityScheduleRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleEligibilityScheduleRequestCollectionResponse(writer: SerializationWriter, unifiedRoleEligibilityScheduleRequestCollectionResponse: UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined = {} as UnifiedRoleEligibilityScheduleRequestCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleEligibilityScheduleRequestCollectionResponse)
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleRequest>("value", unifiedRoleEligibilityScheduleRequestCollectionResponse.value, serializeUnifiedRoleEligibilityScheduleRequest);
}
