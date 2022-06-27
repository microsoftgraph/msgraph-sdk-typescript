import {Entity} from './entity';
import {Json} from './json';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFunctionResult extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The error property */
    error_escaped?: string | undefined;
    /** The value property */
    value?: Json | undefined;
}
