import {createExtensionSchemaPropertyFromDiscriminatorValue} from './createExtensionSchemaPropertyFromDiscriminatorValue';
import {ExtensionSchemaProperty} from './extensionSchemaProperty';
import {EntityImpl, ExtensionSchemaPropertyImpl} from './index';
import {SchemaExtension} from './schemaExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of schemaExtension entities. */
export class SchemaExtensionImpl extends EntityImpl implements Parsable, SchemaExtension {
    /** Description for the schema extension. Supports $filter (eq). */
    public description?: string | undefined;
    /** The appId of the application that is the owner of the schema extension. This property can be supplied on creation, to set the owner.  If not supplied, then the calling application's appId will be set as the owner. In either case, the signed-in user must be the owner of the application. So, for example, if creating a new schema extension definition using Graph Explorer, you must supply the owner property. Once set, this property is read-only and cannot be changed. Supports $filter (eq). */
    public owner?: string | undefined;
    /** The collection of property names and types that make up the schema extension definition. */
    public properties?: ExtensionSchemaProperty[] | undefined;
    /** The lifecycle state of the schema extension. Possible states are InDevelopment, Available, and Deprecated. Automatically set to InDevelopment on creation. Schema extensions provides more information on the possible state transitions and behaviors. Supports $filter (eq). */
    public status?: string | undefined;
    /** Set of Microsoft Graph types (that can support extensions) that the schema extension can be applied to. Select from administrativeUnit, contact, device, event, group, message, organization, post, or user. */
    public targetTypes?: string[] | undefined;
    /**
     * Instantiates a new schemaExtension and sets the default values.
     * @param schemaExtensionParameterValue 
     */
    public constructor(schemaExtensionParameterValue?: SchemaExtension | undefined) {
        super();
        this.description = schemaExtensionParameterValue?.description ;
        this.owner = schemaExtensionParameterValue?.owner ;
        this.properties = schemaExtensionParameterValue?.properties ;
        this.status = schemaExtensionParameterValue?.status ;
        this.targetTypes = schemaExtensionParameterValue?.targetTypes ;
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
        if(this.properties && this.properties.length != 0){        const propertiesArrValue: ExtensionSchemaPropertyImpl[] = []; this.properties?.forEach(element => {propertiesArrValue.push(new ExtensionSchemaPropertyImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionSchemaPropertyImpl>("properties", propertiesArrValue);
        }
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
        if(this.targetTypes){
        writer.writeCollectionOfPrimitiveValues<string>("targetTypes", this.targetTypes);
        }
    };
}
