import {DeviceManagementPartnerAppType} from './deviceManagementPartnerAppType';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {Entity} from './entity';

export interface DeviceManagementPartner extends Entity{
    /** Partner display name */
    displayName?:string | undefined;
    /** Whether device management partner is configured or not */
    isConfigured?:boolean | undefined;
    /** Timestamp of last heartbeat after admin enabled option Connect to Device management Partner */
    lastHeartbeatDateTime?:Date | undefined;
    /** Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp. */
    partnerAppType?:DeviceManagementPartnerAppType | undefined;
    /** Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive. */
    partnerState?:DeviceManagementPartnerTenantState | undefined;
    /** Partner Single tenant App id */
    singleTenantAppId?:string | undefined;
    /** DateTime in UTC when PartnerDevices will be marked as NonCompliant */
    whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?:Date | undefined;
    /** DateTime in UTC when PartnerDevices will be removed */
    whenPartnerDevicesWillBeRemovedDateTime?:Date | undefined;
}
