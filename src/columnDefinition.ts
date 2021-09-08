import {Entity} from './entity';
import {BooleanColumn} from './sites/booleanColumn';
import {CalculatedColumn} from './sites/calculatedColumn';
import {ChoiceColumn} from './sites/choiceColumn';
import {CurrencyColumn} from './sites/currencyColumn';
import {DateTimeColumn} from './sites/dateTimeColumn';
import {DefaultColumnValue} from './sites/defaultColumnValue';
import {GeolocationColumn} from './sites/geolocationColumn';
import {LookupColumn} from './sites/lookupColumn';
import {NumberColumn} from './sites/numberColumn';
import {PersonOrGroupColumn} from './sites/personOrGroupColumn';
import {TextColumn} from './sites/textColumn';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ColumnDefinition extends Entity implements Parsable {
    /** This column stores boolean values.  */
    private _boolean?: BooleanColumn | undefined;
    /** This column's data is calculated based on other columns.  */
    private _calculated?: CalculatedColumn | undefined;
    /** This column stores data from a list of choices.  */
    private _choice?: ChoiceColumn | undefined;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns.  */
    private _columnGroup?: string | undefined;
    /** This column stores currency values.  */
    private _currency?: CurrencyColumn | undefined;
    /** This column stores DateTime values.  */
    private _dateTime?: DateTimeColumn | undefined;
    /** The default value for this column.  */
    private _defaultValue?: DefaultColumnValue | undefined;
    /** The user-facing description of the column.  */
    private _description?: string | undefined;
    /** The user-facing name of the column.  */
    private _displayName?: string | undefined;
    /** If true, no two list items may have the same value for this column.  */
    private _enforceUniqueValues?: boolean | undefined;
    /** This column stores a geolocation.  */
    private _geolocation?: GeolocationColumn | undefined;
    /** Specifies whether the column is displayed in the user interface.  */
    private _hidden?: boolean | undefined;
    /** Specifies whether the column values can used for sorting and searching.  */
    private _indexed?: boolean | undefined;
    /** This column's data is looked up from another source in the site.  */
    private _lookup?: LookupColumn | undefined;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.  */
    private _name?: string | undefined;
    /** This column stores number values.  */
    private _number?: NumberColumn | undefined;
    /** This column stores Person or Group values.  */
    private _personOrGroup?: PersonOrGroupColumn | undefined;
    /** Specifies whether the column values can be modified.  */
    private _readOnly?: boolean | undefined;
    /** Specifies whether the column value is not optional.  */
    private _required?: boolean | undefined;
    /** This column stores text values.  */
    private _text?: TextColumn | undefined;
    /**
     * Instantiates a new columnDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the boolean property value. This column stores boolean values.
     * @returns a booleanColumn
     */
    public get boolean() {
        return this._boolean;
    };
    /**
     * Gets the calculated property value. This column's data is calculated based on other columns.
     * @returns a calculatedColumn
     */
    public get calculated() {
        return this._calculated;
    };
    /**
     * Gets the choice property value. This column stores data from a list of choices.
     * @returns a choiceColumn
     */
    public get choice() {
        return this._choice;
    };
    /**
     * Gets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @returns a string
     */
    public get columnGroup() {
        return this._columnGroup;
    };
    /**
     * Gets the currency property value. This column stores currency values.
     * @returns a currencyColumn
     */
    public get currency() {
        return this._currency;
    };
    /**
     * Gets the dateTime property value. This column stores DateTime values.
     * @returns a dateTimeColumn
     */
    public get dateTime() {
        return this._dateTime;
    };
    /**
     * Gets the defaultValue property value. The default value for this column.
     * @returns a defaultColumnValue
     */
    public get defaultValue() {
        return this._defaultValue;
    };
    /**
     * Gets the description property value. The user-facing description of the column.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the displayName property value. The user-facing name of the column.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @returns a boolean
     */
    public get enforceUniqueValues() {
        return this._enforceUniqueValues;
    };
    /**
     * Gets the geolocation property value. This column stores a geolocation.
     * @returns a geolocationColumn
     */
    public get geolocation() {
        return this._geolocation;
    };
    /**
     * Gets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Gets the indexed property value. Specifies whether the column values can used for sorting and searching.
     * @returns a boolean
     */
    public get indexed() {
        return this._indexed;
    };
    /**
     * Gets the lookup property value. This column's data is looked up from another source in the site.
     * @returns a lookupColumn
     */
    public get lookup() {
        return this._lookup;
    };
    /**
     * Gets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the number property value. This column stores number values.
     * @returns a numberColumn
     */
    public get number() {
        return this._number;
    };
    /**
     * Gets the personOrGroup property value. This column stores Person or Group values.
     * @returns a personOrGroupColumn
     */
    public get personOrGroup() {
        return this._personOrGroup;
    };
    /**
     * Gets the readOnly property value. Specifies whether the column values can be modified.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Gets the required property value. Specifies whether the column value is not optional.
     * @returns a boolean
     */
    public get required() {
        return this._required;
    };
    /**
     * Gets the text property value. This column stores text values.
     * @returns a textColumn
     */
    public get text() {
        return this._text;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["boolean", (o, n) => { (o as unknown as ColumnDefinition).boolean = n.getObjectValue<BooleanColumn>(BooleanColumn); }],
            ["calculated", (o, n) => { (o as unknown as ColumnDefinition).calculated = n.getObjectValue<CalculatedColumn>(CalculatedColumn); }],
            ["choice", (o, n) => { (o as unknown as ColumnDefinition).choice = n.getObjectValue<ChoiceColumn>(ChoiceColumn); }],
            ["columnGroup", (o, n) => { (o as unknown as ColumnDefinition).columnGroup = n.getStringValue(); }],
            ["currency", (o, n) => { (o as unknown as ColumnDefinition).currency = n.getObjectValue<CurrencyColumn>(CurrencyColumn); }],
            ["dateTime", (o, n) => { (o as unknown as ColumnDefinition).dateTime = n.getObjectValue<DateTimeColumn>(DateTimeColumn); }],
            ["defaultValue", (o, n) => { (o as unknown as ColumnDefinition).defaultValue = n.getObjectValue<DefaultColumnValue>(DefaultColumnValue); }],
            ["description", (o, n) => { (o as unknown as ColumnDefinition).description = n.getStringValue(); }],
            ["displayName", (o, n) => { (o as unknown as ColumnDefinition).displayName = n.getStringValue(); }],
            ["enforceUniqueValues", (o, n) => { (o as unknown as ColumnDefinition).enforceUniqueValues = n.getBooleanValue(); }],
            ["geolocation", (o, n) => { (o as unknown as ColumnDefinition).geolocation = n.getObjectValue<GeolocationColumn>(GeolocationColumn); }],
            ["hidden", (o, n) => { (o as unknown as ColumnDefinition).hidden = n.getBooleanValue(); }],
            ["indexed", (o, n) => { (o as unknown as ColumnDefinition).indexed = n.getBooleanValue(); }],
            ["lookup", (o, n) => { (o as unknown as ColumnDefinition).lookup = n.getObjectValue<LookupColumn>(LookupColumn); }],
            ["name", (o, n) => { (o as unknown as ColumnDefinition).name = n.getStringValue(); }],
            ["number", (o, n) => { (o as unknown as ColumnDefinition).number = n.getObjectValue<NumberColumn>(NumberColumn); }],
            ["personOrGroup", (o, n) => { (o as unknown as ColumnDefinition).personOrGroup = n.getObjectValue<PersonOrGroupColumn>(PersonOrGroupColumn); }],
            ["readOnly", (o, n) => { (o as unknown as ColumnDefinition).readOnly = n.getBooleanValue(); }],
            ["required", (o, n) => { (o as unknown as ColumnDefinition).required = n.getBooleanValue(); }],
            ["text", (o, n) => { (o as unknown as ColumnDefinition).text = n.getObjectValue<TextColumn>(TextColumn); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<BooleanColumn>("boolean", this.boolean);
        writer.writeObjectValue<CalculatedColumn>("calculated", this.calculated);
        writer.writeObjectValue<ChoiceColumn>("choice", this.choice);
        writer.writeStringValue("columnGroup", this.columnGroup);
        writer.writeObjectValue<CurrencyColumn>("currency", this.currency);
        writer.writeObjectValue<DateTimeColumn>("dateTime", this.dateTime);
        writer.writeObjectValue<DefaultColumnValue>("defaultValue", this.defaultValue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("enforceUniqueValues", this.enforceUniqueValues);
        writer.writeObjectValue<GeolocationColumn>("geolocation", this.geolocation);
        writer.writeBooleanValue("hidden", this.hidden);
        writer.writeBooleanValue("indexed", this.indexed);
        writer.writeObjectValue<LookupColumn>("lookup", this.lookup);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<NumberColumn>("number", this.number);
        writer.writeObjectValue<PersonOrGroupColumn>("personOrGroup", this.personOrGroup);
        writer.writeBooleanValue("readOnly", this.readOnly);
        writer.writeBooleanValue("required", this.required);
        writer.writeObjectValue<TextColumn>("text", this.text);
    };
    /**
     * Sets the boolean property value. This column stores boolean values.
     * @param value Value to set for the boolean property.
     */
    public set boolean(value: BooleanColumn | undefined) {
        this._boolean = value;
    };
    /**
     * Sets the calculated property value. This column's data is calculated based on other columns.
     * @param value Value to set for the calculated property.
     */
    public set calculated(value: CalculatedColumn | undefined) {
        this._calculated = value;
    };
    /**
     * Sets the choice property value. This column stores data from a list of choices.
     * @param value Value to set for the choice property.
     */
    public set choice(value: ChoiceColumn | undefined) {
        this._choice = value;
    };
    /**
     * Sets the columnGroup property value. For site columns, the name of the group this column belongs to. Helps organize related columns.
     * @param value Value to set for the columnGroup property.
     */
    public set columnGroup(value: string | undefined) {
        this._columnGroup = value;
    };
    /**
     * Sets the currency property value. This column stores currency values.
     * @param value Value to set for the currency property.
     */
    public set currency(value: CurrencyColumn | undefined) {
        this._currency = value;
    };
    /**
     * Sets the dateTime property value. This column stores DateTime values.
     * @param value Value to set for the dateTime property.
     */
    public set dateTime(value: DateTimeColumn | undefined) {
        this._dateTime = value;
    };
    /**
     * Sets the defaultValue property value. The default value for this column.
     * @param value Value to set for the defaultValue property.
     */
    public set defaultValue(value: DefaultColumnValue | undefined) {
        this._defaultValue = value;
    };
    /**
     * Sets the description property value. The user-facing description of the column.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the displayName property value. The user-facing name of the column.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the enforceUniqueValues property value. If true, no two list items may have the same value for this column.
     * @param value Value to set for the enforceUniqueValues property.
     */
    public set enforceUniqueValues(value: boolean | undefined) {
        this._enforceUniqueValues = value;
    };
    /**
     * Sets the geolocation property value. This column stores a geolocation.
     * @param value Value to set for the geolocation property.
     */
    public set geolocation(value: GeolocationColumn | undefined) {
        this._geolocation = value;
    };
    /**
     * Sets the hidden property value. Specifies whether the column is displayed in the user interface.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        this._hidden = value;
    };
    /**
     * Sets the indexed property value. Specifies whether the column values can used for sorting and searching.
     * @param value Value to set for the indexed property.
     */
    public set indexed(value: boolean | undefined) {
        this._indexed = value;
    };
    /**
     * Sets the lookup property value. This column's data is looked up from another source in the site.
     * @param value Value to set for the lookup property.
     */
    public set lookup(value: LookupColumn | undefined) {
        this._lookup = value;
    };
    /**
     * Sets the name property value. The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the number property value. This column stores number values.
     * @param value Value to set for the number property.
     */
    public set number(value: NumberColumn | undefined) {
        this._number = value;
    };
    /**
     * Sets the personOrGroup property value. This column stores Person or Group values.
     * @param value Value to set for the personOrGroup property.
     */
    public set personOrGroup(value: PersonOrGroupColumn | undefined) {
        this._personOrGroup = value;
    };
    /**
     * Sets the readOnly property value. Specifies whether the column values can be modified.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        this._readOnly = value;
    };
    /**
     * Sets the required property value. Specifies whether the column value is not optional.
     * @param value Value to set for the required property.
     */
    public set required(value: boolean | undefined) {
        this._required = value;
    };
    /**
     * Sets the text property value. This column stores text values.
     * @param value Value to set for the text property.
     */
    public set text(value: TextColumn | undefined) {
        this._text = value;
    };
}
