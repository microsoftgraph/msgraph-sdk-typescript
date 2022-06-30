import {DirectoryObjectPartnerReference} from './directoryObjectPartnerReference';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryObjectPartnerReferenceImpl extends DirectoryObjectImpl implements DirectoryObjectPartnerReference {
    /** Description of the object returned. Read-only. */
    private _description?: string | undefined;
    /** Name of directory object being returned, like group or application. Read-only. */
    private _displayName?: string | undefined;
    /** The tenant identifier for the partner tenant. Read-only. */
    private _externalPartnerTenantId?: string | undefined;
    /** The type of the referenced object in the partner tenant. Read-only. */
    private _objectType?: string | undefined;
    /**
     * Instantiates a new DirectoryObjectPartnerReference and sets the default values.
     * @param directoryObjectPartnerReferenceParameterValue 
     */
    public constructor(directoryObjectPartnerReferenceParameterValue?: DirectoryObjectPartnerReference | undefined) {
        super(directoryObjectPartnerReferenceParameterValue);
        this._description = directoryObjectPartnerReferenceParameterValue?.description;
        this._displayName = directoryObjectPartnerReferenceParameterValue?.displayName;
        this._externalPartnerTenantId = directoryObjectPartnerReferenceParameterValue?.externalPartnerTenantId;
        this._objectType = directoryObjectPartnerReferenceParameterValue?.objectType;
    };
    /**
     * Gets the description property value. Description of the object returned. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the object returned. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Name of directory object being returned, like group or application. Read-only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of directory object being returned, like group or application. Read-only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the externalPartnerTenantId property value. The tenant identifier for the partner tenant. Read-only.
     * @returns a string
     */
    public get externalPartnerTenantId() {
        return this._externalPartnerTenantId;
    };
    /**
     * Sets the externalPartnerTenantId property value. The tenant identifier for the partner tenant. Read-only.
     * @param value Value to set for the externalPartnerTenantId property.
     */
    public set externalPartnerTenantId(value: string | undefined) {
        if(value) {
            this._externalPartnerTenantId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalPartnerTenantId": n => { this.externalPartnerTenantId = n.getStringValue(); },
            "objectType": n => { this.objectType = n.getStringValue(); },
        };
    };
    /**
     * Gets the objectType property value. The type of the referenced object in the partner tenant. Read-only.
     * @returns a string
     */
    public get objectType() {
        return this._objectType;
    };
    /**
     * Sets the objectType property value. The type of the referenced object in the partner tenant. Read-only.
     * @param value Value to set for the objectType property.
     */
    public set objectType(value: string | undefined) {
        if(value) {
            this._objectType = value;
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
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalPartnerTenantId){
            writer.writeStringValue("externalPartnerTenantId", this.externalPartnerTenantId);
        }
        if(this.objectType){
            writer.writeStringValue("objectType", this.objectType);
        }
    };
}
