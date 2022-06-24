import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAssignmentGrade} from './educationAssignmentGrade';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentGradeImpl implements EducationAssignmentGrade {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** User who did the grading. */
    public gradedBy?: IdentitySet | undefined;
    /** Moment in time when the grade was applied to this submission object. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public gradedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationAssignmentGrade and sets the default values.
     * @param educationAssignmentGradeParameterValue 
     */
    public constructor(educationAssignmentGradeParameterValue?: EducationAssignmentGrade | undefined) {
        this.additionalData = educationAssignmentGradeParameterValue?.additionalData ? educationAssignmentGradeParameterValue?.additionalData! : {};
        this.gradedBy = educationAssignmentGradeParameterValue?.gradedBy instanceof IdentitySetImpl? educationAssignmentGradeParameterValue?.gradedBy:new IdentitySetImpl(educationAssignmentGradeParameterValue?.gradedBy);
        this.gradedDateTime = educationAssignmentGradeParameterValue?.gradedDateTime;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.gradedBy){
            writer.writeObjectValue<IdentitySetImpl>("gradedBy", new IdentitySetImpl(this.gradedBy));
        }
        if(this.gradedDateTime){
            writer.writeDateValue("gradedDateTime", this.gradedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
