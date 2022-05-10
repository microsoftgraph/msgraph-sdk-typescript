import {EducationExternalSource} from './educationExternalSource';
import {EducationOrganization} from './educationOrganization';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationOrganizationImpl extends EntityImpl implements EducationOrganization, Parsable {
    /** Organization description.  */
    description?: string | undefined;
    /** Organization display name.  */
    displayName?: string | undefined;
    /** Where this user was created from. Possible values are: sis, lms, or manual.  */
    externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from.  */
    externalSourceDetail?: string | undefined;
    /**
     * Instantiates a new educationOrganization and sets the default values.
     * @param educationOrganizationParameterValue 
     */
    public constructor(educationOrganizationParameterValue?: EducationOrganization | undefined) {
        super();
        this.description = educationOrganizationParameterValue?.description ;
        this.displayName = educationOrganizationParameterValue?.displayName ;
        this.externalSource = educationOrganizationParameterValue?.externalSource ;
        this.externalSourceDetail = educationOrganizationParameterValue?.externalSourceDetail ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
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
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalSource){
        if(this.externalSource)
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        }
        if(this.externalSourceDetail){
        if(this.externalSourceDetail)
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        }
    };
}
