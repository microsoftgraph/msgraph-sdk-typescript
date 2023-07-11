import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookRangeBorder extends Entity, Parsable {
    /**
     * HTML color code representing the color of the border line, of the form #RRGGBB (e.g. 'FFA500') or as a named HTML color (e.g. 'orange').
     */
    color?: string | undefined;
    /**
     * Constant value that indicates the specific side of the border. The possible values are: EdgeTop, EdgeBottom, EdgeLeft, EdgeRight, InsideVertical, InsideHorizontal, DiagonalDown, DiagonalUp. Read-only.
     */
    sideIndex?: string | undefined;
    /**
     * One of the constants of line style specifying the line style for the border. The possible values are: None, Continuous, Dash, DashDot, DashDotDot, Dot, Double, SlantDashDot.
     */
    style?: string | undefined;
    /**
     * Specifies the weight of the border around a range. The possible values are: Hairline, Thin, Medium, Thick.
     */
    weight?: string | undefined;
}
