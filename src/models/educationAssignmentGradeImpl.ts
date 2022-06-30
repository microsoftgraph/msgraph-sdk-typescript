import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentGradeImpl implements EducationAssignmentGrade {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** User who did the grading. */
    private _gradedBy?: IdentitySet | undefined;
    /** Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _gradedDateTime?: Date | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new educationAssignmentGrade and sets the default values.
     * @param educationAssignmentGradeParameterValue 
     */
    public constructor(educationAssignmentGradeParameterValue?: EducationAssignmentGrade | undefined) {
        this._additionalData = educationAssignmentGradeParameterValue?.additionalData ? educationAssignmentGradeParameterValue?.additionalData! : {};
        this._gradedBy = educationAssignmentGradeParameterValue?.gradedBy;
        this._gradedDateTime = educationAssignmentGradeParameterValue?.gradedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "gradedBy": n => { this.gradedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "gradedDateTime": n => { this.gradedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the gradedBy property value. User who did the grading.
     * @returns a IdentitySetInterface
     */
    public get gradedBy() {
        return this._gradedBy;
    };
    /**
     * Sets the gradedBy property value. User who did the grading.
     * @param value Value to set for the gradedBy property.
     */
    public set gradedBy(value: IdentitySet | undefined) {
        if(value) {
            this._gradedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the gradedDateTime property value. Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get gradedDateTime() {
        return this._gradedDateTime;
    };
    /**
     * Sets the gradedDateTime property value. Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the gradedDateTime property.
     */
    public set gradedDateTime(value: Date | undefined) {
        if(value) {
            this._gradedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.gradedBy){
            writer.writeObjectValue<IdentitySetImpl>("gradedBy", (!this.gradedBy || this.gradedBy instanceof IdentitySetImpl? this.gradedBy : new IdentitySetImpl(this.gradedBy)));
        }
        if(this.gradedDateTime){
            writer.writeDateValue("gradedDateTime", this.gradedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
