import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationFeedback} from './educationFeedback';
import {EducationItemBody} from './educationItemBody';
import {IdentitySet} from './identitySet';
import {EducationItemBodyImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackImpl implements EducationFeedback {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** User who created the feedback. */
    public feedbackBy?: IdentitySet | undefined;
    /** Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public feedbackDateTime?: Date | undefined;
    /** Feedback. */
    public text?: EducationItemBody | undefined;
    /**
     * Instantiates a new educationFeedback and sets the default values.
     * @param educationFeedbackParameterValue 
     */
    public constructor(educationFeedbackParameterValue?: EducationFeedback | undefined) {
        this.additionalData = educationFeedbackParameterValue?.additionalData ? educationFeedbackParameterValue?.additionalData! : {};
        this.feedbackBy = educationFeedbackParameterValue?.feedbackBy;
        this.feedbackDateTime = educationFeedbackParameterValue?.feedbackDateTime;
        this.text = educationFeedbackParameterValue?.text;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "feedbackBy": n => { this.feedbackBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "feedbackDateTime": n => { this.feedbackDateTime = n.getDateValue(); },
            "text": n => { this.text = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.feedbackBy){
            writer.writeObjectValue<IdentitySetImpl>("feedbackBy", new IdentitySetImpl(this.feedbackBy));
        }
        if(this.feedbackDateTime){
            writer.writeDateValue("feedbackDateTime", this.feedbackDateTime);
        }
        if(this.text){
            writer.writeObjectValue<EducationItemBodyImpl>("text", new EducationItemBodyImpl(this.text));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
