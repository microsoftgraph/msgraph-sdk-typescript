import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EntityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentSettingsImpl extends EntityImpl implements EducationAssignmentSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false. */
    public submissionAnimationDisabled?: boolean | undefined;
    /**
     * Instantiates a new EducationAssignmentSettings and sets the default values.
     * @param educationAssignmentSettingsParameterValue 
     */
    public constructor(educationAssignmentSettingsParameterValue?: EducationAssignmentSettings | undefined) {
        super(educationAssignmentSettingsParameterValue);
        this.additionalData = educationAssignmentSettingsParameterValue?.additionalData ? educationAssignmentSettingsParameterValue?.additionalData! : {};
        this.submissionAnimationDisabled = educationAssignmentSettingsParameterValue?.submissionAnimationDisabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "submissionAnimationDisabled": n => { this.submissionAnimationDisabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.submissionAnimationDisabled){
            writer.writeBooleanValue("submissionAnimationDisabled", this.submissionAnimationDisabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
