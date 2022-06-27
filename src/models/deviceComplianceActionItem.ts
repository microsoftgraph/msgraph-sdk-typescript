import {DeviceComplianceActionType} from './deviceComplianceActionType';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceComplianceActionItem extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** What action to take. Possible values are: noAction, notification, block, retire, wipe, removeResourceAccessProfiles, pushNotification, remoteLock. */
    actionType?: DeviceComplianceActionType | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Number of hours to wait till the action will be enforced. Valid values 0 to 8760 */
    gracePeriodHours?: number | undefined;
    /** A list of group IDs to speicify who to CC this notification message to. */
    notificationMessageCCList?: string[] | undefined;
    /** What notification Message template to use */
    notificationTemplateId?: string | undefined;
}
