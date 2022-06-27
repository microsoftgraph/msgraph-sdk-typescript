import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {AdditionalDataHolder, Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface WindowsUpdateActiveHoursInstall extends Partial<AdditionalDataHolder>, Partial<Parsable>, WindowsUpdateInstallScheduleType {
    /** Active Hours End */
    activeHoursEnd?: TimeOnly | undefined;
    /** Active Hours Start */
    activeHoursStart?: TimeOnly | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
