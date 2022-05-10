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

export class ExternalConnectionImpl extends EntityImpl implements ExternalConnection, Parsable {
    /** Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.  */
    configuration?: Configuration | undefined;
    /** Description of the connection displayed in the Microsoft 365 admin center. Optional.  */
    description?: string | undefined;
    /** Read-only. Nullable.  */
    groups?: ExternalGroup[] | undefined;
    /** Read-only. Nullable.  */
    items?: ExternalItem[] | undefined;
    /** The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.  */
    name?: string | undefined;
    /** Read-only. Nullable.  */
    operations?: ConnectionOperation[] | undefined;
    /** Read-only. Nullable.  */
    schema?: Schema | undefined;
    /** Indicates the current state of the connection. Possible values are draft, ready, obsolete, and limitExceeded. Required.  */
    state?: ConnectionState | undefined;
    /**
     * Instantiates a new externalConnection and sets the default values.
     * @param externalConnectionParameterValue 
     */
    public constructor(externalConnectionParameterValue?: ExternalConnection | undefined) {
        super();
        this.configuration = externalConnectionParameterValue?.configuration ;
        this.description = externalConnectionParameterValue?.description ;
        this.groups = externalConnectionParameterValue?.groups ;
        this.items = externalConnectionParameterValue?.items ;
        this.name = externalConnectionParameterValue?.name ;
        this.operations = externalConnectionParameterValue?.operations ;
        this.schema = externalConnectionParameterValue?.schema ;
        this.state = externalConnectionParameterValue?.state ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configuration){
        if(this.configuration)
        writer.writeObjectValue<ConfigurationImpl>("configuration", new ConfigurationImpl(this.configuration));
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.groups){
        const groupsArrValue: ExternalGroupImpl[] = []; this.groups?.forEach(element => {groupsArrValue.push(new ExternalGroupImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalGroupImpl>("groups", groupsArrValue);
        }
        if(this.items){
        const itemsArrValue: ExternalItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(new ExternalItemImpl(element));});
        writer.writeCollectionOfObjectValues<ExternalItemImpl>("items", itemsArrValue);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
        if(this.operations){
        const operationsArrValue: ConnectionOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new ConnectionOperationImpl(element));});
        writer.writeCollectionOfObjectValues<ConnectionOperationImpl>("operations", operationsArrValue);
        }
        if(this.schema){
        if(this.schema)
        writer.writeObjectValue<SchemaImpl>("schema", new SchemaImpl(this.schema));
        }
        if(this.state){
        if(this.state)
        writer.writeEnumValue<ConnectionState>("state", this.state);
        }
    };
}
