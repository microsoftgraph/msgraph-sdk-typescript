import type {Json} from '../../../../../../../models/json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VdbPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cost property
     */
    cost?: Json | undefined;
    /**
     * The endPeriod property
     */
    endPeriod?: Json | undefined;
    /**
     * The factor property
     */
    factor?: Json | undefined;
    /**
     * The life property
     */
    life?: Json | undefined;
    /**
     * The noSwitch property
     */
    noSwitch?: Json | undefined;
    /**
     * The salvage property
     */
    salvage?: Json | undefined;
    /**
     * The startPeriod property
     */
    startPeriod?: Json | undefined;
}
