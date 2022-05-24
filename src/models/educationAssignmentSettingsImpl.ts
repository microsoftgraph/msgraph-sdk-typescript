import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationAssignmentSettingsImpl extends EntityImpl implements EducationAssignmentSettings, Parsable {
    /** Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false. */
    public submissionAnimationDisabled?: boolean | undefined;
    /**
     * Instantiates a new educationAssignmentSettings and sets the default values.
     * @param educationAssignmentSettingsParameterValue 
     */
    public constructor(educationAssignmentSettingsParameterValue?: EducationAssignmentSettings | undefined) {
        super();
        this.submissionAnimationDisabled = educationAssignmentSettingsParameterValue?.submissionAnimationDisabled ;
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
    };
}
