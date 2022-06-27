import {ScheduleChangeRequest} from './scheduleChangeRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequest extends Partial<AdditionalDataHolder>, Partial<Parsable>, ScheduleChangeRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** ID for the open shift. */
    openShiftId?: string | undefined;
}
