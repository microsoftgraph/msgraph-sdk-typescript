import {BooleanColumn} from './booleanColumn';
import {CalculatedColumn} from './calculatedColumn';
import {ChoiceColumn} from './choiceColumn';
import {ColumnTypes} from './columnTypes';
import {ColumnValidation} from './columnValidation';
import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {ContentTypeInfo} from './contentTypeInfo';
import {CurrencyColumn} from './currencyColumn';
import {DateTimeColumn} from './dateTimeColumn';
import {DefaultColumnValue} from './defaultColumnValue';
import {Entity} from './entity';
import {GeolocationColumn} from './geolocationColumn';
import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {LookupColumn} from './lookupColumn';
import {NumberColumn} from './numberColumn';
import {PersonOrGroupColumn} from './personOrGroupColumn';
import {TermColumn} from './termColumn';
import {TextColumn} from './textColumn';
import {ThumbnailColumn} from './thumbnailColumn';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnDefinition extends Entity, Parsable {
    /**
     * This column stores boolean values.
     */
    boolean?: BooleanColumn | undefined;
    /**
     * This column's data is calculated based on other columns.
     */
    calculated?: CalculatedColumn | undefined;
    /**
     * This column stores data from a list of choices.
     */
    choice?: ChoiceColumn | undefined;
    /**
     * For site columns, the name of the group this column belongs to. Helps organize related columns.
     */
    columnGroup?: string | undefined;
    /**
     * This column stores content approval status.
     */
    contentApprovalStatus?: ContentApprovalStatusColumn | undefined;
    /**
     * This column stores currency values.
     */
    currency?: CurrencyColumn | undefined;
    /**
     * This column stores DateTime values.
     */
    dateTime?: DateTimeColumn | undefined;
    /**
     * The default value for this column.
     */
    defaultValue?: DefaultColumnValue | undefined;
    /**
     * The user-facing description of the column.
     */
    description?: string | undefined;
    /**
     * The user-facing name of the column.
     */
    displayName?: string | undefined;
    /**
     * If true, no two list items may have the same value for this column.
     */
    enforceUniqueValues?: boolean | undefined;
    /**
     * This column stores a geolocation.
     */
    geolocation?: GeolocationColumn | undefined;
    /**
     * Specifies whether the column is displayed in the user interface.
     */
    hidden?: boolean | undefined;
    /**
     * This column stores hyperlink or picture values.
     */
    hyperlinkOrPicture?: HyperlinkOrPictureColumn | undefined;
    /**
     * Specifies whether the column values can be used for sorting and searching.
     */
    indexed?: boolean | undefined;
    /**
     * Indicates whether this column can be deleted.
     */
    isDeletable?: boolean | undefined;
    /**
     * Indicates whether values in the column can be reordered. Read-only.
     */
    isReorderable?: boolean | undefined;
    /**
     * Specifies whether the column can be changed.
     */
    isSealed?: boolean | undefined;
    /**
     * This column's data is looked up from another source in the site.
     */
    lookup?: LookupColumn | undefined;
    /**
     * The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     */
    name?: string | undefined;
    /**
     * This column stores number values.
     */
    number?: NumberColumn | undefined;
    /**
     * This column stores Person or Group values.
     */
    personOrGroup?: PersonOrGroupColumn | undefined;
    /**
     * If 'true', changes to this column will be propagated to lists that implement the column.
     */
    propagateChanges?: boolean | undefined;
    /**
     * Specifies whether the column values can be modified.
     */
    readOnly?: boolean | undefined;
    /**
     * Specifies whether the column value isn't optional.
     */
    required?: boolean | undefined;
    /**
     * The source column for the content type column.
     */
    sourceColumn?: ColumnDefinition | undefined;
    /**
     * ContentType from which this column is inherited from. Present only in contentTypes columns response. Read-only.
     */
    sourceContentType?: ContentTypeInfo | undefined;
    /**
     * This column stores taxonomy terms.
     */
    term?: TermColumn | undefined;
    /**
     * This column stores text values.
     */
    text?: TextColumn | undefined;
    /**
     * This column stores thumbnail values.
     */
    thumbnail?: ThumbnailColumn | undefined;
    /**
     * For site columns, the type of column. Read-only.
     */
    type?: ColumnTypes | undefined;
    /**
     * This column stores validation formula and message for the column.
     */
    validation?: ColumnValidation | undefined;
}
