import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookSortField extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Represents whether the sorting is done in an ascending fashion.
     */
    ascending?: boolean | undefined;
    /**
     * Represents the color that is the target of the condition if the sorting is on font or cell color.
     */
    color?: string | undefined;
    /**
     * Represents additional sorting options for this field. The possible values are: Normal, TextAsNumber.
     */
    dataOption?: string | undefined;
    /**
     * Represents the icon that is the target of the condition if the sorting is on the cell's icon.
     */
    icon?: WorkbookIcon | undefined;
    /**
     * Represents the column (or row, depending on the sort orientation) that the condition is on. Represented as an offset from the first column (or row).
     */
    key?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Represents the type of sorting of this condition. The possible values are: Value, CellColor, FontColor, Icon.
     */
    sortOn?: string | undefined;
}
