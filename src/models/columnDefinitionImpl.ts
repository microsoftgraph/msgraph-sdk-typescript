import {BooleanColumn} from './booleanColumn';
import {CalculatedColumn} from './calculatedColumn';
import {ChoiceColumn} from './choiceColumn';
import {ColumnDefinition} from './columnDefinition';
import {ColumnTypes} from './columnTypes';
import {ColumnValidation} from './columnValidation';
import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {ContentTypeInfo} from './contentTypeInfo';
import {createBooleanColumnFromDiscriminatorValue} from './createBooleanColumnFromDiscriminatorValue';
import {createCalculatedColumnFromDiscriminatorValue} from './createCalculatedColumnFromDiscriminatorValue';
import {createChoiceColumnFromDiscriminatorValue} from './createChoiceColumnFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createColumnValidationFromDiscriminatorValue} from './createColumnValidationFromDiscriminatorValue';
import {createContentApprovalStatusColumnFromDiscriminatorValue} from './createContentApprovalStatusColumnFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createCurrencyColumnFromDiscriminatorValue} from './createCurrencyColumnFromDiscriminatorValue';
import {createDateTimeColumnFromDiscriminatorValue} from './createDateTimeColumnFromDiscriminatorValue';
import {createDefaultColumnValueFromDiscriminatorValue} from './createDefaultColumnValueFromDiscriminatorValue';
import {createGeolocationColumnFromDiscriminatorValue} from './createGeolocationColumnFromDiscriminatorValue';
import {createHyperlinkOrPictureColumnFromDiscriminatorValue} from './createHyperlinkOrPictureColumnFromDiscriminatorValue';
import {createLookupColumnFromDiscriminatorValue} from './createLookupColumnFromDiscriminatorValue';
import {createNumberColumnFromDiscriminatorValue} from './createNumberColumnFromDiscriminatorValue';
import {createPersonOrGroupColumnFromDiscriminatorValue} from './createPersonOrGroupColumnFromDiscriminatorValue';
import {createTermColumnFromDiscriminatorValue} from './createTermColumnFromDiscriminatorValue';
import {createTextColumnFromDiscriminatorValue} from './createTextColumnFromDiscriminatorValue';
import {createThumbnailColumnFromDiscriminatorValue} from './createThumbnailColumnFromDiscriminatorValue';
import {CurrencyColumn} from './currencyColumn';
import {DateTimeColumn} from './dateTimeColumn';
import {DefaultColumnValue} from './defaultColumnValue';
import {GeolocationColumn} from './geolocationColumn';
import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {BooleanColumnImpl, CalculatedColumnImpl, ChoiceColumnImpl, ColumnValidationImpl, ContentApprovalStatusColumnImpl, ContentTypeInfoImpl, CurrencyColumnImpl, DateTimeColumnImpl, DefaultColumnValueImpl, EntityImpl, GeolocationColumnImpl, HyperlinkOrPictureColumnImpl, LookupColumnImpl, NumberColumnImpl, PersonOrGroupColumnImpl, TermColumnImpl, TextColumnImpl, ThumbnailColumnImpl} from './index';
import {LookupColumn} from './lookupColumn';
import {NumberColumn} from './numberColumn';
import {PersonOrGroupColumn} from './personOrGroupColumn';
import {TermColumn} from './termColumn';
import {TextColumn} from './textColumn';
import {ThumbnailColumn} from './thumbnailColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ColumnDefinitionImpl extends EntityImpl implements ColumnDefinition {
    /** This column stores boolean values. */
    private _boolean?: BooleanColumn | undefined;
    /** This column's data is calculated based on other columns. */
    private _calculated?: CalculatedColumn | undefined;
    /** This column stores data from a list of choices. */
    private _choice?: ChoiceColumn | undefined;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns. */
    private _columnGroup?: string | undefined;
    /** This column stores content approval status. */
    private _contentApprovalStatus?: ContentApprovalStatusColumn | undefined;
    /** This column stores currency values. */
    private _currency?: CurrencyColumn | undefined;
    /** This column stores DateTime values. */
    private _dateTime?: DateTimeColumn | undefined;
    /** The default value for this column. */
    private _defaultValue?: DefaultColumnValue | undefined;
    /** The user-facing description of the column. */
    private _description?: string | undefined;
    /** The user-facing name of the column. */
    private _displayName?: string | undefined;
    /** If true, no two list items may have the same value for this column. */
    private _enforceUniqueValues?: boolean | undefined;
    /** This column stores a geolocation. */
    private _geolocation?: GeolocationColumn | undefined;
    /** Specifies whether the column is displayed in the user interface. */
    private _hidden?: boolean | undefined;
    /** This column stores hyperlink or picture values. */
    private _hyperlinkOrPicture?: HyperlinkOrPictureColumn | undefined;
    /** Specifies whether the column values can used for sorting and searching. */
    private _indexed?: boolean | undefined;
    /** Indicates whether this column can be deleted. */
    private _isDeletable?: boolean | undefined;
    /** Indicates whether values in the column can be reordered. Read-only. */
    private _isReorderable?: boolean | undefined;
    /** Specifies whether the column can be changed. */
    private _isSealed?: boolean | undefined;
    /** This column's data is looked up from another source in the site. */
    private _lookup?: LookupColumn | undefined;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName. */
    private _name?: string | undefined;
    /** This column stores number values. */
    private _number?: NumberColumn | undefined;
    /** This column stores Person or Group values. */
    private _personOrGroup?: PersonOrGroupColumn | undefined;
    /** If true, changes to this column will be propagated to lists that implement the column. */
    private _propagateChanges?: boolean | undefined;
    /** Specifies whether the column values can be modified. */
    private _readOnly?: boolean | undefined;
    /** Specifies whether the column value isn't optional. */
    private _required?: boolean | undefined;
    /** The source column for content type column. */
    private _sourceColumn?: ColumnDefinition | undefined;
    /** ContentType from which this column is inherited from. Used only to fetch contentTypes columns. */
    private _sourceContentType?: ContentTypeInfo | undefined;
    /** This column stores taxonomy terms. */
    private _term?: TermColumn | undefined;
    /** This column stores text values. */
    private _text?: TextColumn | undefined;
    /** This column stores thumbnail values. */
    private _thumbnail?: ThumbnailColumn | undefined;
    /** For site columns, the type of column. Read-only. */
    private _type?: ColumnTypes | undefined;
    /** This column stores validation formula and message for the column. */
    private _validation?: ColumnValidation | undefined;
    /**
     * Gets the boolean property value. This column stores boolean values.
     * @returns a BooleanColumnInterface
     */
    public get boolean() {
        return this._boolean;
    };
    /**
     * Sets the boolean property value. This column stores boolean values.
     * @param value Value to set for the boolean property.
     */
    public set boolean(value: BooleanColumn | undefined) {
        if(value) {
            this._boolean = value instanceof BooleanColumnImpl? value : new BooleanColumnImpl(value);
        }
    };
    /**
     * Gets the calculated property value. This column's data is calculated based on other columns.
     * @returns a CalculatedColumnInterface
     */
    public get calculated() {
        return this._calculated;
    };
    /**
     * Sets the calculated property value. This column's data is calculated based on other columns.
     * @param value Value to set for the calculated property.
     */
    public set calculated(value: CalculatedColumn | undefined) {
        if(value) {
            this._calculated = value instanceof CalculatedColumnImpl? value : new CalculatedColumnImpl(value);
        }
    };
    /**
     * Gets the choice property value. This column stores data from a list of choices.
     * @returns a ChoiceColumnInterface
     */
    public get choice() {
        return this._choice;
    };
    /**
     * Sets the choice property value. This column stores data from a list of choices.
     * @param value Value to set for the choice property.
     */
    public set choice(value: ChoiceColumn | undefined) {
        if(value) {
            this._choice = value instanceof ChoiceColumnImpl? value : new ChoiceColumnImpl(value);
        }
    };
    /**
     * Gets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @returns a string
     */
    public get columnGroup() {
        return this._columnGroup;
    };
    /**
     * Sets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @param value Value to set for the columnGroup property.
     */
    public set columnGroup(value: string | undefined) {
        if(value) {
            this._columnGroup = value;
        }
    };
    /**
     * Instantiates a new columnDefinition and sets the default values.
     * @param columnDefinitionParameterValue 
     */
    public constructor(columnDefinitionParameterValue?: ColumnDefinition | undefined) {
        super(columnDefinitionParameterValue);
        this._boolean = columnDefinitionParameterValue?.boolean;
        this._calculated = columnDefinitionParameterValue?.calculated;
        this._choice = columnDefinitionParameterValue?.choice;
        this._columnGroup = columnDefinitionParameterValue?.columnGroup;
        this._contentApprovalStatus = columnDefinitionParameterValue?.contentApprovalStatus;
        this._currency = columnDefinitionParameterValue?.currency;
        this._dateTime = columnDefinitionParameterValue?.dateTime;
        this._defaultValue = columnDefinitionParameterValue?.defaultValue;
        this._description = columnDefinitionParameterValue?.description;
        this._displayName = columnDefinitionParameterValue?.displayName;
        this._enforceUniqueValues = columnDefinitionParameterValue?.enforceUniqueValues;
        this._geolocation = columnDefinitionParameterValue?.geolocation;
        this._hidden = columnDefinitionParameterValue?.hidden;
        this._hyperlinkOrPicture = columnDefinitionParameterValue?.hyperlinkOrPicture;
        this._indexed = columnDefinitionParameterValue?.indexed;
        this._isDeletable = columnDefinitionParameterValue?.isDeletable;
        this._isReorderable = columnDefinitionParameterValue?.isReorderable;
        this._isSealed = columnDefinitionParameterValue?.isSealed;
        this._lookup = columnDefinitionParameterValue?.lookup;
        this._name = columnDefinitionParameterValue?.name;
        this._number = columnDefinitionParameterValue?.number;
        this._personOrGroup = columnDefinitionParameterValue?.personOrGroup;
        this._propagateChanges = columnDefinitionParameterValue?.propagateChanges;
        this._readOnly = columnDefinitionParameterValue?.readOnly;
        this._required = columnDefinitionParameterValue?.required;
        this._sourceColumn = columnDefinitionParameterValue?.sourceColumn;
        this._sourceContentType = columnDefinitionParameterValue?.sourceContentType;
        this._term = columnDefinitionParameterValue?.term;
        this._text = columnDefinitionParameterValue?.text;
        this._thumbnail = columnDefinitionParameterValue?.thumbnail;
        this._type = columnDefinitionParameterValue?.type;
        this._validation = columnDefinitionParameterValue?.validation;
    };
    /**
     * Gets the contentApprovalStatus property value. This column stores content approval status.
     * @returns a ContentApprovalStatusColumnInterface
     */
    public get contentApprovalStatus() {
        return this._contentApprovalStatus;
    };
    /**
     * Sets the contentApprovalStatus property value. This column stores content approval status.
     * @param value Value to set for the contentApprovalStatus property.
     */
    public set contentApprovalStatus(value: ContentApprovalStatusColumn | undefined) {
        if(value) {
            this._contentApprovalStatus = value instanceof ContentApprovalStatusColumnImpl? value : new ContentApprovalStatusColumnImpl(value);
        }
    };
    /**
     * Gets the currency property value. This column stores currency values.
     * @returns a CurrencyColumnInterface
     */
    public get currency() {
        return this._currency;
    };
    /**
     * Sets the currency property value. This column stores currency values.
     * @param value Value to set for the currency property.
     */
    public set currency(value: CurrencyColumn | undefined) {
        if(value) {
            this._currency = value instanceof CurrencyColumnImpl? value : new CurrencyColumnImpl(value);
        }
    };
    /**
     * Gets the dateTime property value. This column stores DateTime values.
     * @returns a DateTimeColumnInterface
     */
    public get dateTime() {
        return this._dateTime;
    };
    /**
     * Sets the dateTime property value. This column stores DateTime values.
     * @param value Value to set for the dateTime property.
     */
    public set dateTime(value: DateTimeColumn | undefined) {
        if(value) {
            this._dateTime = value instanceof DateTimeColumnImpl? value : new DateTimeColumnImpl(value);
        }
    };
    /**
     * Gets the defaultValue property value. The default value for this column.
     * @returns a DefaultColumnValueInterface
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Sets the defaultValue property value. The default value for this column.
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: DefaultColumnValue | undefined) {
        if(value) {
            this._defaultValue = value instanceof DefaultColumnValueImpl? value : new DefaultColumnValueImpl(value);
        }
    };
    /**
     * Gets the description property value. The user-facing description of the column.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The user-facing description of the column.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The user-facing name of the column.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The user-facing name of the column.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @returns a boolean
     */
    public get enforceUniqueValues() {
        return this._enforceUniqueValues;
    };
    /**
     * Sets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @param value Value to set for the enforceUniqueValues property.
     */
    public set enforceUniqueValues(value: boolean | undefined) {
        if(value) {
            this._enforceUniqueValues = value;
        }
    };
    /**
     * Gets the geolocation property value. This column stores a geolocation.
     * @returns a GeolocationColumnInterface
     */
    public get geolocation() {
        return this._geolocation;
    };
    /**
     * Sets the geolocation property value. This column stores a geolocation.
     * @param value Value to set for the geolocation property.
     */
    public set geolocation(value: GeolocationColumn | undefined) {
        if(value) {
            this._geolocation = value instanceof GeolocationColumnImpl? value : new GeolocationColumnImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "boolean": n => { this.boolean = n.getObjectValue<BooleanColumnImpl>(createBooleanColumnFromDiscriminatorValue); },
            "calculated": n => { this.calculated = n.getObjectValue<CalculatedColumnImpl>(createCalculatedColumnFromDiscriminatorValue); },
            "choice": n => { this.choice = n.getObjectValue<ChoiceColumnImpl>(createChoiceColumnFromDiscriminatorValue); },
            "columnGroup": n => { this.columnGroup = n.getStringValue(); },
            "contentApprovalStatus": n => { this.contentApprovalStatus = n.getObjectValue<ContentApprovalStatusColumnImpl>(createContentApprovalStatusColumnFromDiscriminatorValue); },
            "currency": n => { this.currency = n.getObjectValue<CurrencyColumnImpl>(createCurrencyColumnFromDiscriminatorValue); },
            "dateTime": n => { this.dateTime = n.getObjectValue<DateTimeColumnImpl>(createDateTimeColumnFromDiscriminatorValue); },
            "defaultValue": n => { this.defaultValue = n.getObjectValue<DefaultColumnValueImpl>(createDefaultColumnValueFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enforceUniqueValues": n => { this.enforceUniqueValues = n.getBooleanValue(); },
            "geolocation": n => { this.geolocation = n.getObjectValue<GeolocationColumnImpl>(createGeolocationColumnFromDiscriminatorValue); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "hyperlinkOrPicture": n => { this.hyperlinkOrPicture = n.getObjectValue<HyperlinkOrPictureColumnImpl>(createHyperlinkOrPictureColumnFromDiscriminatorValue); },
            "indexed": n => { this.indexed = n.getBooleanValue(); },
            "isDeletable": n => { this.isDeletable = n.getBooleanValue(); },
            "isReorderable": n => { this.isReorderable = n.getBooleanValue(); },
            "isSealed": n => { this.isSealed = n.getBooleanValue(); },
            "lookup": n => { this.lookup = n.getObjectValue<LookupColumnImpl>(createLookupColumnFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "number": n => { this.number = n.getObjectValue<NumberColumnImpl>(createNumberColumnFromDiscriminatorValue); },
            "personOrGroup": n => { this.personOrGroup = n.getObjectValue<PersonOrGroupColumnImpl>(createPersonOrGroupColumnFromDiscriminatorValue); },
            "propagateChanges": n => { this.propagateChanges = n.getBooleanValue(); },
            "readOnly": n => { this.readOnly = n.getBooleanValue(); },
            "required": n => { this.required = n.getBooleanValue(); },
            "sourceColumn": n => { this.sourceColumn = n.getObjectValue<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "sourceContentType": n => { this.sourceContentType = n.getObjectValue<ContentTypeInfoImpl>(createContentTypeInfoFromDiscriminatorValue); },
            "term": n => { this.term = n.getObjectValue<TermColumnImpl>(createTermColumnFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<TextColumnImpl>(createTextColumnFromDiscriminatorValue); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue<ThumbnailColumnImpl>(createThumbnailColumnFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<ColumnTypes>(ColumnTypes); },
            "validation": n => { this.validation = n.getObjectValue<ColumnValidationImpl>(createColumnValidationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        if(value) {
            this._hidden = value;
        }
    };
    /**
     * Gets the hyperlinkOrPicture property value. This column stores hyperlink or picture values.
     * @returns a HyperlinkOrPictureColumnInterface
     */
    public get hyperlinkOrPicture() {
        return this._hyperlinkOrPicture;
    };
    /**
     * Sets the hyperlinkOrPicture property value. This column stores hyperlink or picture values.
     * @param value Value to set for the hyperlinkOrPicture property.
     */
    public set hyperlinkOrPicture(value: HyperlinkOrPictureColumn | undefined) {
        if(value) {
            this._hyperlinkOrPicture = value instanceof HyperlinkOrPictureColumnImpl? value : new HyperlinkOrPictureColumnImpl(value);
        }
    };
    /**
     * Gets the indexed property value. Specifies whether the column values can used for sorting and searching.
     * @returns a boolean
     */
    public get indexed() {
        return this._indexed;
    };
    /**
     * Sets the indexed property value. Specifies whether the column values can used for sorting and searching.
     * @param value Value to set for the indexed property.
     */
    public set indexed(value: boolean | undefined) {
        if(value) {
            this._indexed = value;
        }
    };
    /**
     * Gets the isDeletable property value. Indicates whether this column can be deleted.
     * @returns a boolean
     */
    public get isDeletable() {
        return this._isDeletable;
    };
    /**
     * Sets the isDeletable property value. Indicates whether this column can be deleted.
     * @param value Value to set for the isDeletable property.
     */
    public set isDeletable(value: boolean | undefined) {
        if(value) {
            this._isDeletable = value;
        }
    };
    /**
     * Gets the isReorderable property value. Indicates whether values in the column can be reordered. Read-only.
     * @returns a boolean
     */
    public get isReorderable() {
        return this._isReorderable;
    };
    /**
     * Sets the isReorderable property value. Indicates whether values in the column can be reordered. Read-only.
     * @param value Value to set for the isReorderable property.
     */
    public set isReorderable(value: boolean | undefined) {
        if(value) {
            this._isReorderable = value;
        }
    };
    /**
     * Gets the isSealed property value. Specifies whether the column can be changed.
     * @returns a boolean
     */
    public get isSealed() {
        return this._isSealed;
    };
    /**
     * Sets the isSealed property value. Specifies whether the column can be changed.
     * @param value Value to set for the isSealed property.
     */
    public set isSealed(value: boolean | undefined) {
        if(value) {
            this._isSealed = value;
        }
    };
    /**
     * Gets the lookup property value. This column's data is looked up from another source in the site.
     * @returns a LookupColumnInterface
     */
    public get lookup() {
        return this._lookup;
    };
    /**
     * Sets the lookup property value. This column's data is looked up from another source in the site.
     * @param value Value to set for the lookup property.
     */
    public set lookup(value: LookupColumn | undefined) {
        if(value) {
            this._lookup = value instanceof LookupColumnImpl? value : new LookupColumnImpl(value);
        }
    };
    /**
     * Gets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the number property value. This column stores number values.
     * @returns a NumberColumnInterface
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. This column stores number values.
     * @param value Value to set for the number property.
     */
    public set number(value: NumberColumn | undefined) {
        if(value) {
            this._number = value instanceof NumberColumnImpl? value : new NumberColumnImpl(value);
        }
    };
    /**
     * Gets the personOrGroup property value. This column stores Person or Group values.
     * @returns a PersonOrGroupColumnInterface
     */
    public get personOrGroup() {
        return this._personOrGroup;
    };
    /**
     * Sets the personOrGroup property value. This column stores Person or Group values.
     * @param value Value to set for the personOrGroup property.
     */
    public set personOrGroup(value: PersonOrGroupColumn | undefined) {
        if(value) {
            this._personOrGroup = value instanceof PersonOrGroupColumnImpl? value : new PersonOrGroupColumnImpl(value);
        }
    };
    /**
     * Gets the propagateChanges property value. If true, changes to this column will be propagated to lists that implement the column.
     * @returns a boolean
     */
    public get propagateChanges() {
        return this._propagateChanges;
    };
    /**
     * Sets the propagateChanges property value. If true, changes to this column will be propagated to lists that implement the column.
     * @param value Value to set for the propagateChanges property.
     */
    public set propagateChanges(value: boolean | undefined) {
        if(value) {
            this._propagateChanges = value;
        }
    };
    /**
     * Gets the readOnly property value. Specifies whether the column values can be modified.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Sets the readOnly property value. Specifies whether the column values can be modified.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        if(value) {
            this._readOnly = value;
        }
    };
    /**
     * Gets the required property value. Specifies whether the column value isn't optional.
     * @returns a boolean
     */
    public get required() {
        return this._required;
    };
    /**
     * Sets the required property value. Specifies whether the column value isn't optional.
     * @param value Value to set for the required property.
     */
    public set required(value: boolean | undefined) {
        if(value) {
            this._required = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.boolean){
            writer.writeObjectValue<BooleanColumnImpl>("boolean", (!this.boolean || this.boolean instanceof BooleanColumnImpl? this.boolean : new BooleanColumnImpl(this.boolean)));
        }
        if(this.calculated){
            writer.writeObjectValue<CalculatedColumnImpl>("calculated", (!this.calculated || this.calculated instanceof CalculatedColumnImpl? this.calculated : new CalculatedColumnImpl(this.calculated)));
        }
        if(this.choice){
            writer.writeObjectValue<ChoiceColumnImpl>("choice", (!this.choice || this.choice instanceof ChoiceColumnImpl? this.choice : new ChoiceColumnImpl(this.choice)));
        }
        if(this.columnGroup){
            writer.writeStringValue("columnGroup", this.columnGroup);
        }
        if(this.contentApprovalStatus){
            writer.writeObjectValue<ContentApprovalStatusColumnImpl>("contentApprovalStatus", (!this.contentApprovalStatus || this.contentApprovalStatus instanceof ContentApprovalStatusColumnImpl? this.contentApprovalStatus : new ContentApprovalStatusColumnImpl(this.contentApprovalStatus)));
        }
        if(this.currency){
            writer.writeObjectValue<CurrencyColumnImpl>("currency", (!this.currency || this.currency instanceof CurrencyColumnImpl? this.currency : new CurrencyColumnImpl(this.currency)));
        }
        if(this.dateTime){
            writer.writeObjectValue<DateTimeColumnImpl>("dateTime", (!this.dateTime || this.dateTime instanceof DateTimeColumnImpl? this.dateTime : new DateTimeColumnImpl(this.dateTime)));
        }
        if(this.defaultValue){
            writer.writeObjectValue<DefaultColumnValueImpl>("defaultValue", (!this.defaultValue || this.defaultValue instanceof DefaultColumnValueImpl? this.defaultValue : new DefaultColumnValueImpl(this.defaultValue)));
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enforceUniqueValues){
            writer.writeBooleanValue("enforceUniqueValues", this.enforceUniqueValues);
        }
        if(this.geolocation){
            writer.writeObjectValue<GeolocationColumnImpl>("geolocation", (!this.geolocation || this.geolocation instanceof GeolocationColumnImpl? this.geolocation : new GeolocationColumnImpl(this.geolocation)));
        }
        if(this.hidden){
            writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.hyperlinkOrPicture){
            writer.writeObjectValue<HyperlinkOrPictureColumnImpl>("hyperlinkOrPicture", (!this.hyperlinkOrPicture || this.hyperlinkOrPicture instanceof HyperlinkOrPictureColumnImpl? this.hyperlinkOrPicture : new HyperlinkOrPictureColumnImpl(this.hyperlinkOrPicture)));
        }
        if(this.indexed){
            writer.writeBooleanValue("indexed", this.indexed);
        }
        if(this.isDeletable){
            writer.writeBooleanValue("isDeletable", this.isDeletable);
        }
        if(this.isReorderable){
            writer.writeBooleanValue("isReorderable", this.isReorderable);
        }
        if(this.isSealed){
            writer.writeBooleanValue("isSealed", this.isSealed);
        }
        if(this.lookup){
            writer.writeObjectValue<LookupColumnImpl>("lookup", (!this.lookup || this.lookup instanceof LookupColumnImpl? this.lookup : new LookupColumnImpl(this.lookup)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.number){
            writer.writeObjectValue<NumberColumnImpl>("number", (!this.number || this.number instanceof NumberColumnImpl? this.number : new NumberColumnImpl(this.number)));
        }
        if(this.personOrGroup){
            writer.writeObjectValue<PersonOrGroupColumnImpl>("personOrGroup", (!this.personOrGroup || this.personOrGroup instanceof PersonOrGroupColumnImpl? this.personOrGroup : new PersonOrGroupColumnImpl(this.personOrGroup)));
        }
        if(this.propagateChanges){
            writer.writeBooleanValue("propagateChanges", this.propagateChanges);
        }
        if(this.readOnly){
            writer.writeBooleanValue("readOnly", this.readOnly);
        }
        if(this.required){
            writer.writeBooleanValue("required", this.required);
        }
        if(this.sourceColumn){
            writer.writeObjectValue<ColumnDefinitionImpl>("sourceColumn", (!this.sourceColumn || this.sourceColumn instanceof ColumnDefinitionImpl? this.sourceColumn : new ColumnDefinitionImpl(this.sourceColumn)));
        }
        if(this.sourceContentType){
            writer.writeObjectValue<ContentTypeInfoImpl>("sourceContentType", (!this.sourceContentType || this.sourceContentType instanceof ContentTypeInfoImpl? this.sourceContentType : new ContentTypeInfoImpl(this.sourceContentType)));
        }
        if(this.term){
            writer.writeObjectValue<TermColumnImpl>("term", (!this.term || this.term instanceof TermColumnImpl? this.term : new TermColumnImpl(this.term)));
        }
        if(this.text){
            writer.writeObjectValue<TextColumnImpl>("text", (!this.text || this.text instanceof TextColumnImpl? this.text : new TextColumnImpl(this.text)));
        }
        if(this.thumbnail){
            writer.writeObjectValue<ThumbnailColumnImpl>("thumbnail", (!this.thumbnail || this.thumbnail instanceof ThumbnailColumnImpl? this.thumbnail : new ThumbnailColumnImpl(this.thumbnail)));
        }
        if(this.type){
            writer.writeEnumValue<ColumnTypes>("type", this.type);
        }
        if(this.validation){
            writer.writeObjectValue<ColumnValidationImpl>("validation", (!this.validation || this.validation instanceof ColumnValidationImpl? this.validation : new ColumnValidationImpl(this.validation)));
        }
    };
    /**
     * Gets the sourceColumn property value. The source column for content type column.
     * @returns a ColumnDefinitionInterface
     */
    public get sourceColumn() {
        return this._sourceColumn;
    };
    /**
     * Sets the sourceColumn property value. The source column for content type column.
     * @param value Value to set for the sourceColumn property.
     */
    public set sourceColumn(value: ColumnDefinition | undefined) {
        if(value) {
            this._sourceColumn = value instanceof ColumnDefinitionImpl? value : new ColumnDefinitionImpl(value);
        }
    };
    /**
     * Gets the sourceContentType property value. ContentType from which this column is inherited from. Used only to fetch contentTypes columns.
     * @returns a ContentTypeInfoInterface
     */
    public get sourceContentType() {
        return this._sourceContentType;
    };
    /**
     * Sets the sourceContentType property value. ContentType from which this column is inherited from. Used only to fetch contentTypes columns.
     * @param value Value to set for the sourceContentType property.
     */
    public set sourceContentType(value: ContentTypeInfo | undefined) {
        if(value) {
            this._sourceContentType = value instanceof ContentTypeInfoImpl? value : new ContentTypeInfoImpl(value);
        }
    };
    /**
     * Gets the term property value. This column stores taxonomy terms.
     * @returns a TermColumnInterface
     */
    public get term() {
        return this._term;
    };
    /**
     * Sets the term property value. This column stores taxonomy terms.
     * @param value Value to set for the term property.
     */
    public set term(value: TermColumn | undefined) {
        if(value) {
            this._term = value instanceof TermColumnImpl? value : new TermColumnImpl(value);
        }
    };
    /**
     * Gets the text property value. This column stores text values.
     * @returns a TextColumnInterface
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. This column stores text values.
     * @param value Value to set for the text property.
     */
    public set text(value: TextColumn | undefined) {
        if(value) {
            this._text = value instanceof TextColumnImpl? value : new TextColumnImpl(value);
        }
    };
    /**
     * Gets the thumbnail property value. This column stores thumbnail values.
     * @returns a ThumbnailColumnInterface
     */
    public get thumbnail() {
        return this._thumbnail;
    };
    /**
     * Sets the thumbnail property value. This column stores thumbnail values.
     * @param value Value to set for the thumbnail property.
     */
    public set thumbnail(value: ThumbnailColumn | undefined) {
        if(value) {
            this._thumbnail = value instanceof ThumbnailColumnImpl? value : new ThumbnailColumnImpl(value);
        }
    };
    /**
     * Gets the type property value. For site columns, the type of column. Read-only.
     * @returns a columnTypes
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. For site columns, the type of column. Read-only.
     * @param value Value to set for the type property.
     */
    public set type(value: ColumnTypes | undefined) {
        if(value) {
            this._type = value;
        }
    };
    /**
     * Gets the validation property value. This column stores validation formula and message for the column.
     * @returns a ColumnValidationInterface
     */
    public get validation() {
        return this._validation;
    };
    /**
     * Sets the validation property value. This column stores validation formula and message for the column.
     * @param value Value to set for the validation property.
     */
    public set validation(value: ColumnValidation | undefined) {
        if(value) {
            this._validation = value instanceof ColumnValidationImpl? value : new ColumnValidationImpl(value);
        }
    };
}
