import {Entity} from './entity';
import {Json} from './json';
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
