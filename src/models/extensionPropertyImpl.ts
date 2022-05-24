import {ExtensionProperty} from './extensionProperty';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ExtensionPropertyImpl extends DirectoryObjectImpl implements ExtensionProperty, Parsable {
    /** Display name of the application object on which this extension property is defined. Read-only. */
    public appDisplayName?: string | undefined;
    /** Specifies the data type of the value the extension property can hold. Following values are supported. Not nullable. Binary - 256 bytes maximumBooleanDateTime - Must be specified in ISO 8601 format. Will be stored in UTC.Integer - 32-bit value.LargeInteger - 64-bit value.String - 256 characters maximum */
    public dataType?: string | undefined;
    /** Indicates if this extension property was synced from on-premises active directory using Azure AD Connect. Read-only. */
    public isSyncedFromOnPremises?: boolean | undefined;
    /** Name of the extension property. Not nullable. */
    public name?: string | undefined;
    /** Following values are supported. Not nullable. UserGroupOrganizationDeviceApplication */
    public targetObjects?: string[] | undefined;
    /**
     * Instantiates a new extensionProperty and sets the default values.
     * @param extensionPropertyParameterValue 
     */
    public constructor(extensionPropertyParameterValue?: ExtensionProperty | undefined) {
        super();
        this.appDisplayName = extensionPropertyParameterValue?.appDisplayName ;
        this.dataType = extensionPropertyParameterValue?.dataType ;
        this.isSyncedFromOnPremises = extensionPropertyParameterValue?.isSyncedFromOnPremises ;
        this.name = extensionPropertyParameterValue?.name ;
        this.targetObjects = extensionPropertyParameterValue?.targetObjects ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "dataType": n => { this.dataType = n.getStringValue(); },
            "isSyncedFromOnPremises": n => { this.isSyncedFromOnPremises = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "targetObjects": n => { this.targetObjects = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDisplayName){
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.dataType){
        writer.writeStringValue("dataType", this.dataType);
        }
        if(this.isSyncedFromOnPremises){
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.targetObjects){
        writer.writeCollectionOfPrimitiveValues<string>("targetObjects", this.targetObjects);
        }
    };
}
