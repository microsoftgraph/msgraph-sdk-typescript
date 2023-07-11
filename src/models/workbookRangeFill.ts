import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeFill extends Entity, Parsable {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange')
     */
    color?: string | undefined;
}
