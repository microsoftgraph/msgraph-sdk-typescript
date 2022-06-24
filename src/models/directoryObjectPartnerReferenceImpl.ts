import {DirectoryObjectPartnerReference} from './directoryObjectPartnerReference';
import {DirectoryObjectImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryObjectPartnerReferenceImpl extends DirectoryObjectImpl implements DirectoryObjectPartnerReference {
    /** Description of the object returned. Read-only. */
    public description?: string | undefined;
    /** Name of directory object being returned, like group or application. Read-only. */
    public displayName?: string | undefined;
    /** The tenant identifier for the partner tenant. Read-only. */
    public externalPartnerTenantId?: string | undefined;
    /** The type of the referenced object in the partner tenant. Read-only. */
    public objectType?: string | undefined;
    /**
     * Instantiates a new DirectoryObjectPartnerReference and sets the default values.
     * @param directoryObjectPartnerReferenceParameterValue 
     */
    public constructor(directoryObjectPartnerReferenceParameterValue?: DirectoryObjectPartnerReference | undefined) {
        super(directoryObjectPartnerReferenceParameterValue);
        this.description = directoryObjectPartnerReferenceParameterValue?.description;
        this.displayName = directoryObjectPartnerReferenceParameterValue?.displayName;
        this.externalPartnerTenantId = directoryObjectPartnerReferenceParameterValue?.externalPartnerTenantId;
        this.objectType = directoryObjectPartnerReferenceParameterValue?.objectType;
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
