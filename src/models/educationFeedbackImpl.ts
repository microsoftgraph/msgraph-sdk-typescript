import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationFeedback} from './educationFeedback';
import {EducationItemBody} from './educationItemBody';
import {IdentitySet} from './identitySet';
import {EducationItemBodyImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedbackImpl implements EducationFeedback {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** User who created the feedback. */
    private _feedbackBy?: IdentitySet | undefined;
    /** Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _feedbackDateTime?: Date | undefined;
    /** Feedback. */
    private _text?: EducationItemBody | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new educationFeedback and sets the default values.
     * @param educationFeedbackParameterValue 
     */
    public constructor(educationFeedbackParameterValue?: EducationFeedback | undefined) {
        this._additionalData = educationFeedbackParameterValue?.additionalData ? educationFeedbackParameterValue?.additionalData! : {};
        this._feedbackBy = educationFeedbackParameterValue?.feedbackBy;
        this._feedbackDateTime = educationFeedbackParameterValue?.feedbackDateTime;
        this._text = educationFeedbackParameterValue?.text;
    };
    /**
     * Gets the feedbackBy property value. User who created the feedback.
     * @returns a IdentitySetInterface
     */
    public get feedbackBy() {
        return this._feedbackBy;
    };
    /**
     * Sets the feedbackBy property value. User who created the feedback.
     * @param value Value to set for the feedbackBy property.
     */
    public set feedbackBy(value: IdentitySet | undefined) {
        if(value) {
            this._feedbackBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the feedbackDateTime property value. Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get feedbackDateTime() {
        return this._feedbackDateTime;
    };
    /**
     * Sets the feedbackDateTime property value. Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the feedbackDateTime property.
     */
    public set feedbackDateTime(value: Date | undefined) {
        if(value) {
            this._feedbackDateTime = value;
        }
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
            writer.writeObjectValue<IdentitySetImpl>("feedbackBy", (this.feedbackBy instanceof IdentitySetImpl? this.feedbackBy as IdentitySetImpl: new IdentitySetImpl(this.feedbackBy)));
        }
        if(this.feedbackDateTime){
            writer.writeDateValue("feedbackDateTime", this.feedbackDateTime);
        }
        if(this.text){
            writer.writeObjectValue<EducationItemBodyImpl>("text", (this.text instanceof EducationItemBodyImpl? this.text as EducationItemBodyImpl: new EducationItemBodyImpl(this.text)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. Feedback.
     * @returns a EducationItemBodyInterface
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Feedback.
     * @param value Value to set for the text property.
     */
    public set text(value: EducationItemBody | undefined) {
        if(value) {
            this._text = value instanceof EducationItemBodyImpl? value as EducationItemBodyImpl: new EducationItemBodyImpl(value);
        }
    };
}
