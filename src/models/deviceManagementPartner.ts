import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerAssignment} from './deviceManagementPartnerAssignment';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementPartner extends Entity, Parsable {
    /**
     * Partner display name
     */
    displayName?: string | undefined;
    /**
     * User groups that specifies whether enrollment is through partner.
     */
    groupsRequiringPartnerEnrollment?: DeviceManagementPartnerAssignment[] | undefined;
    /**
     * Whether device management partner is configured or not
     */
    isConfigured?: boolean | undefined;
    /**
     * Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
     */
    lastHeartbeatDateTime?: Date | undefined;
    /**
     * Partner App Type.
     */
    partnerAppType?: DeviceManagementPartnerAppType | undefined;
    /**
     * Partner state of this tenant.
     */
    partnerState?: DeviceManagementPartnerTenantState | undefined;
    /**
     * Partner Single tenant App id
     */
    singleTenantAppId?: string | undefined;
    /**
     * DateTime in UTC when PartnerDevices will be marked as NonCompliant
     */
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: Date | undefined;
    /**
     * DateTime in UTC when PartnerDevices will be removed
     */
    whenPartnerDevicesWillBeRemovedDateTime?: Date | undefined;
}
