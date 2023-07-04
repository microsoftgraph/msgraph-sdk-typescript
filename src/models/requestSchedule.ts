import {ExpirationPattern} from './expirationPattern';
import {PatternedRecurrence} from './patternedRecurrence';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RequestSchedule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * When the eligible or active assignment expires.
     */
    expiration?: ExpirationPattern | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The frequency of the  eligible or active assignment. This property is currently unsupported in PIM.
     */
    recurrence?: PatternedRecurrence | undefined;
    /**
     * When the  eligible or active assignment becomes active.
     */
    startDateTime?: Date | undefined;
}
