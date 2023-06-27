import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScheduleEntity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDateTime property
     */
    endDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The startDateTime property
     */
    startDateTime?: Date | undefined;
    /**
     * The theme property
     */
    theme?: ScheduleEntityTheme | undefined;
}
