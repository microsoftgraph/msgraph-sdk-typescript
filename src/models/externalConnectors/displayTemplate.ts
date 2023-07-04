import {Json} from '../json';
import {PropertyRule} from './propertyRule';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DisplayTemplate extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The text identifier for the display template; for example, contosoTickets. Maximum 16 characters. Only alphanumeric characters allowed.
     */
    id?: string | undefined;
    /**
     * The layout property
     */
    layout?: Json | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Defines the priority of a display template. A display template with priority 1 is evaluated before a template with priority 4. Gaps in priority values are supported. Must be positive value.
     */
    priority?: number | undefined;
    /**
     * Specifies additional rules for selecting this display template based on the item schema. Optional.
     */
    rules?: PropertyRule[] | undefined;
}
