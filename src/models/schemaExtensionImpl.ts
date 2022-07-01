import {createExtensionSchemaPropertyFromDiscriminatorValue} from './createExtensionSchemaPropertyFromDiscriminatorValue';
import {ExtensionSchemaProperty} from './extensionSchemaProperty';
import {EntityImpl, ExtensionSchemaPropertyImpl} from './index';
import {SchemaExtension} from './schemaExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of schemaExtension entities. */
export class SchemaExtensionImpl extends EntityImpl implements SchemaExtension {
    /** Description for the schema extension. Supports $filter (eq). */
    private _description?: string | undefined;
    /** The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq). */
    private _owner?: string | undefined;
    /** The collection of property names and types that make up the schema extension definition. */
    private _properties?: ExtensionSchemaProperty[] | undefined;
    /** The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors. Supports $filter (eq). */
    private _status?: string | undefined;
    /** Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user. */
    private _targetTypes?: string[] | undefined;
    /**
     * Instantiates a new schemaExtension and sets the default values.
     * @param schemaExtensionParameterValue 
     */
    public constructor(schemaExtensionParameterValue?: SchemaExtension | undefined) {
        super(schemaExtensionParameterValue);
        this._description = schemaExtensionParameterValue?.description;
        this._owner = schemaExtensionParameterValue?.owner;
        this._properties = schemaExtensionParameterValue?.properties;
        this._status = schemaExtensionParameterValue?.status;
        this._targetTypes = schemaExtensionParameterValue?.targetTypes;
    };
    /**
     * Gets the description property value. Description for the schema extension. Supports $filter (eq).
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description for the schema extension. Supports $filter (eq).
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
            "description": n => { this.description = n.getStringValue(); },
            "owner": n => { this.owner = n.getStringValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<ExtensionSchemaPropertyImpl>(createExtensionSchemaPropertyFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
            "targetTypes": n => { this.targetTypes = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the owner property value. The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq).
     * @returns a string
     */
    public get owner() {
        return this._owner;
    };
    /**
     * Sets the owner property value. The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq).
     * @param value Value to set for the owner property.
     */
    public set owner(value: string | undefined) {
        if(value) {
            this._owner = value;
        }
    };
    /**
     * Gets the properties property value. The collection of property names and types that make up the schema extension definition.
     * @returns a ExtensionSchemaPropertyInterface
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The collection of property names and types that make up the schema extension definition.
     * @param value Value to set for the properties property.
     */
    public set properties(value: ExtensionSchemaProperty[] | undefined) {
        if(value) {
            const propertiesArrValue: ExtensionSchemaPropertyImpl[] = [];
            this.properties?.forEach(element => {
                propertiesArrValue.push((element instanceof ExtensionSchemaPropertyImpl? element as ExtensionSchemaPropertyImpl:new ExtensionSchemaPropertyImpl(element)));
            });
            this._properties = propertiesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.owner){
            writer.writeStringValue("owner", this.owner);
        }
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: ExtensionSchemaPropertyImpl[] = [];
        this.properties?.forEach(element => {
            propertiesArrValue.push((element instanceof ExtensionSchemaPropertyImpl? element as ExtensionSchemaPropertyImpl:new ExtensionSchemaPropertyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionSchemaPropertyImpl>("properties", propertiesArrValue);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
        if(this.targetTypes){
            writer.writeCollectionOfPrimitiveValues<string>("targetTypes", this.targetTypes);
        }
    };
    /**
     * Gets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors. Supports $filter (eq).
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors. Supports $filter (eq).
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user.
     * @returns a string
     */
    public get targetTypes() {
        return this._targetTypes;
    };
    /**
     * Sets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user.
     * @param value Value to set for the targetTypes property.
     */
    public set targetTypes(value: string[] | undefined) {
        if(value) {
            this._targetTypes = value;
        }
    };
}
