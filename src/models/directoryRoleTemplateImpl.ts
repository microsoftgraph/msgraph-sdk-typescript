import {DirectoryRoleTemplate} from './directoryRoleTemplate';
import {DirectoryObjectImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryRoleTemplateImpl extends DirectoryObjectImpl implements DirectoryRoleTemplate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The description to set for the directory role. Read-only. */
    public description?: string | undefined;
    /** The display name to set for the directory role. Read-only. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new DirectoryRoleTemplate and sets the default values.
     * @param directoryRoleTemplateParameterValue 
     */
    public constructor(directoryRoleTemplateParameterValue?: DirectoryRoleTemplate | undefined) {
        super(directoryRoleTemplateParameterValue);
        this.additionalData = directoryRoleTemplateParameterValue?.additionalData ? directoryRoleTemplateParameterValue?.additionalData! : {};
        this.description = directoryRoleTemplateParameterValue?.description;
        this.displayName = directoryRoleTemplateParameterValue?.displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
