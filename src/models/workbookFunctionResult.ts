import type {Entity} from './entity';
import type {Json} from './json';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFunctionResult extends Entity, Parsable {
    /**
     * The error property
     */
    errorEscaped?: string | undefined;
    /**
     * The value property
     */
    value?: Json | undefined;
}
