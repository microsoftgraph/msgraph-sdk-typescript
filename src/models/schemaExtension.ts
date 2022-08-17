import {createExtensionSchemaPropertyFromDiscriminatorValue} from './createExtensionSchemaPropertyFromDiscriminatorValue';
import {Entity, ExtensionSchemaProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SchemaExtension extends Entity implements Parsable {
    /** Description for the schema extension. Supports $filter (eq). */
    private _description?: string | undefined;
    /** The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq). */
    private _owner?: string | undefined;
    /** The collection of property names and types that make up the schema extension definition. */
    private _properties?: ExtensionSchemaProperty[] | undefined;
    /** The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. For more information about the possible state transitions and behaviors, see Schema extensions lifecycle. Supports $filter (eq). */
    private _status?: string | undefined;
    /** Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, todoTask, todoTaskList, or user. */
    private _targetTypes?: string[] | undefined;
    /**
     * Instantiates a new SchemaExtension and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.schemaExtension";
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
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "owner": n => { this.owner = n.getStringValue(); },
            "properties": n => { this.properties = n.getCollectionOfObjectValues<ExtensionSchemaProperty>(createExtensionSchemaPropertyFromDiscriminatorValue); },
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
        this._owner = value;
    };
    /**
     * Gets the properties property value. The collection of property names and types that make up the schema extension definition.
     * @returns a extensionSchemaProperty
     */
    public get properties() {
        return this._properties;
    };
    /**
     * Sets the properties property value. The collection of property names and types that make up the schema extension definition.
     * @param value Value to set for the properties property.
     */
    public set properties(value: ExtensionSchemaProperty[] | undefined) {
        this._properties = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("owner", this.owner);
        writer.writeCollectionOfObjectValues<ExtensionSchemaProperty>("properties", this.properties);
        writer.writeStringValue("status", this.status);
        writer.writeCollectionOfPrimitiveValues<string>("targetTypes", this.targetTypes);
    };
    /**
     * Gets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. For more information about the possible state transitions and behaviors, see Schema extensions lifecycle. Supports $filter (eq).
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. For more information about the possible state transitions and behaviors, see Schema extensions lifecycle. Supports $filter (eq).
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, todoTask, todoTaskList, or user.
     * @returns a string
     */
    public get targetTypes() {
        return this._targetTypes;
    };
    /**
     * Sets the targetTypes property value. Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, todoTask, todoTaskList, or user.
     * @param value Value to set for the targetTypes property.
     */
    public set targetTypes(value: string[] | undefined) {
        this._targetTypes = value;
    };
}
