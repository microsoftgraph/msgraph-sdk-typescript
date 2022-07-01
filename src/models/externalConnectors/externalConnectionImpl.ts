import {EntityImpl} from '../';
import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {createConfigurationFromDiscriminatorValue} from './createConfigurationFromDiscriminatorValue';
import {createConnectionOperationFromDiscriminatorValue} from './createConnectionOperationFromDiscriminatorValue';
import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import {createSchemaFromDiscriminatorValue} from './createSchemaFromDiscriminatorValue';
import {ExternalConnection} from './externalConnection';
import {ExternalGroup} from './externalGroup';
import {ExternalItem} from './externalItem';
import {ConfigurationImpl, ConnectionOperationImpl, ExternalGroupImpl, ExternalItemImpl, SchemaImpl} from './index';
import {Schema} from './schema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class ExternalConnectionImpl extends EntityImpl implements ExternalConnection {
    /** Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional. */
    private _configuration?: Configuration | undefined;
    /** Description of the connection displayed in the Microsoft 365 admin center. Optional. */
    private _description?: string | undefined;
    /** The groups property */
    private _groups?: ExternalGroup[] | undefined;
    /** The items property */
    private _items?: ExternalItem[] | undefined;
    /** The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required. */
    private _name?: string | undefined;
    /** The operations property */
    private _operations?: ConnectionOperation[] | undefined;
    /** The schema property */
    private _schema?: Schema | undefined;
    /** Indicates the current state of the connection. Possible values are draft, ready, obsolete, and limitExceeded. Required. */
    private _state?: ConnectionState | undefined;
    /**
     * Gets the configuration property value. Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.
     * @returns a ConfigurationInterface
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: Configuration | undefined) {
        if(value) {
            this._configuration = value instanceof ConfigurationImpl? value as ConfigurationImpl: new ConfigurationImpl(value);
        }
    };
    /**
     * Instantiates a new externalConnection and sets the default values.
     * @param externalConnectionParameterValue 
     */
    public constructor(externalConnectionParameterValue?: ExternalConnection | undefined) {
        super(externalConnectionParameterValue);
        this._configuration = externalConnectionParameterValue?.configuration;
        this._description = externalConnectionParameterValue?.description;
        this._groups = externalConnectionParameterValue?.groups;
        this._items = externalConnectionParameterValue?.items;
        this._name = externalConnectionParameterValue?.name;
        this._operations = externalConnectionParameterValue?.operations;
        this._schema = externalConnectionParameterValue?.schema;
        this._state = externalConnectionParameterValue?.state;
    };
    /**
     * Gets the description property value. Description of the connection displayed in the Microsoft 365 admin center. Optional.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the connection displayed in the Microsoft 365 admin center. Optional.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configuration": n => { this.configuration = n.getObjectValue<ConfigurationImpl>(createConfigurationFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "groups": n => { this.groups = n.getCollectionOfObjectValues<ExternalGroupImpl>(createExternalGroupFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<ExternalItemImpl>(createExternalItemFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<ConnectionOperationImpl>(createConnectionOperationFromDiscriminatorValue); },
            "schema": n => { this.schema = n.getObjectValue<SchemaImpl>(createSchemaFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ConnectionState>(ConnectionState); },
        };
    };
    /**
     * Gets the groups property value. The groups property
     * @returns a ExternalGroupInterface
     */
    public get groups() {
        return this._groups;
    };
    /**
     * Sets the groups property value. The groups property
     * @param value Value to set for the groups property.
     */
    public set groups(value: ExternalGroup[] | undefined) {
        if(value) {
            const groupsArrValue: ExternalGroupImpl[] = [];
            this.groups?.forEach(element => {
                groupsArrValue.push((element instanceof ExternalGroupImpl? element as ExternalGroupImpl:new ExternalGroupImpl(element)));
            });
            this._groups = groupsArrValue;
        }
    };
    /**
     * Gets the items property value. The items property
     * @returns a ExternalItemInterface
     */
    public get items() {
        return this._items;
    };
    /**
     * Sets the items property value. The items property
     * @param value Value to set for the items property.
     */
    public set items(value: ExternalItem[] | undefined) {
        if(value) {
            const itemsArrValue: ExternalItemImpl[] = [];
            this.items?.forEach(element => {
                itemsArrValue.push((element instanceof ExternalItemImpl? element as ExternalItemImpl:new ExternalItemImpl(element)));
            });
            this._items = itemsArrValue;
        }
    };
    /**
     * Gets the name property value. The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the operations property value. The operations property
     * @returns a ConnectionOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The operations property
     * @param value Value to set for the operations property.
     */
    public set operations(value: ConnectionOperation[] | undefined) {
        if(value) {
            const operationsArrValue: ConnectionOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof ConnectionOperationImpl? element as ConnectionOperationImpl:new ConnectionOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the schema property value. The schema property
     * @returns a SchemaInterface
     */
    public get schema() {
        return this._schema;
    };
    /**
     * Sets the schema property value. The schema property
     * @param value Value to set for the schema property.
     */
    public set schema(value: Schema | undefined) {
        if(value) {
            this._schema = value instanceof SchemaImpl? value as SchemaImpl: new SchemaImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configuration){
            writer.writeObjectValue<ConfigurationImpl>("configuration", (this.configuration instanceof ConfigurationImpl? this.configuration as ConfigurationImpl: new ConfigurationImpl(this.configuration)));
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.groups && this.groups.length != 0){        const groupsArrValue: ExternalGroupImpl[] = [];
        this.groups?.forEach(element => {
            groupsArrValue.push((element instanceof ExternalGroupImpl? element as ExternalGroupImpl:new ExternalGroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExternalGroupImpl>("groups", groupsArrValue);
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: ExternalItemImpl[] = [];
        this.items?.forEach(element => {
            itemsArrValue.push((element instanceof ExternalItemImpl? element as ExternalItemImpl:new ExternalItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExternalItemImpl>("items", itemsArrValue);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: ConnectionOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof ConnectionOperationImpl? element as ConnectionOperationImpl:new ConnectionOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConnectionOperationImpl>("operations", operationsArrValue);
        }
        if(this.schema){
            writer.writeObjectValue<SchemaImpl>("schema", (this.schema instanceof SchemaImpl? this.schema as SchemaImpl: new SchemaImpl(this.schema)));
        }
        if(this.state){
            writer.writeEnumValue<ConnectionState>("state", this.state);
        }
    };
    /**
     * Gets the state property value. Indicates the current state of the connection. Possible values are draft, ready, obsolete, and limitExceeded. Required.
     * @returns a connectionState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Indicates the current state of the connection. Possible values are draft, ready, obsolete, and limitExceeded. Required.
     * @param value Value to set for the state property.
     */
    public set state(value: ConnectionState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
