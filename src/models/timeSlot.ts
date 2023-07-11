import {DateTimeTimeZone} from './dateTimeTimeZone';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TimeSlot extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The end property
     */
    end?: DateTimeTimeZone | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The start property
     */
    start?: DateTimeTimeZone | undefined;
}
