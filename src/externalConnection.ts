import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {Entity} from './entity';
import {ExternalItem} from './externalItem';
import {Schema} from './schema';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ExternalConnection extends Entity implements Parsable {
    private _configuration?: Configuration | undefined;
    private _description?: string | undefined;
    private _items?: ExternalItem[] | undefined;
    private _name?: string | undefined;
    private _operations?: ConnectionOperation[] | undefined;
    private _schema?: Schema | undefined;
    private _state?: ConnectionState | undefined;
    /**
     * Instantiates a new externalConnection and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the configuration property value. 
     * @returns a configuration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the items property value. 
     * @returns a externalItem
     */
    public get items() {
        return this._items;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Gets the operations property value. 
     * @returns a connectionOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Gets the schema property value. 
     * @returns a schema
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Gets the state property value. 
     * @returns a connectionState
     */
    public get state() {
        return this._state;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["configuration", (o, n) => { (o as unknown as ExternalConnection).configuration = n.getObjectValue<Configuration>(Configuration); }],
            ["description", (o, n) => { (o as unknown as ExternalConnection).description = n.getStringValue(); }],
            ["items", (o, n) => { (o as unknown as ExternalConnection).items = n.getCollectionOfObjectValues<ExternalItem>(ExternalItem); }],
            ["name", (o, n) => { (o as unknown as ExternalConnection).name = n.getStringValue(); }],
            ["operations", (o, n) => { (o as unknown as ExternalConnection).operations = n.getCollectionOfObjectValues<ConnectionOperation>(ConnectionOperation); }],
            ["schema", (o, n) => { (o as unknown as ExternalConnection).schema = n.getObjectValue<Schema>(Schema); }],
            ["state", (o, n) => { (o as unknown as ExternalConnection).state = n.getEnumValue<ConnectionState>(ConnectionState); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Configuration>("configuration", this.configuration);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<ExternalItem>("items", this.items);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<ConnectionOperation>("operations", this.operations);
        writer.writeObjectValue<Schema>("schema", this.schema);
        writer.writeEnumValue<ConnectionState>("state", this.state);
    };
    /**
     * Sets the configuration property value. 
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: Configuration | undefined) {
        this._configuration = value;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the items property value. 
     * @param value Value to set for the items property.
     */
    public set items(value: ExternalItem[] | undefined) {
        this._items = value;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Sets the operations property value. 
     * @param value Value to set for the operations property.
     */
    public set operations(value: ConnectionOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Sets the schema property value. 
     * @param value Value to set for the schema property.
     */
    public set schema(value: Schema | undefined) {
        this._schema = value;
    };
    /**
     * Sets the state property value. 
     * @param value Value to set for the state property.
     */
    public set state(value: ConnectionState | undefined) {
        this._state = value;
    };
}
