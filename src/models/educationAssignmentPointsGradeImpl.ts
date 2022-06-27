import {EducationAssignmentPointsGrade} from './educationAssignmentPointsGrade';
import {EducationAssignmentGradeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentPointsGradeImpl extends EducationAssignmentGradeImpl implements EducationAssignmentPointsGrade {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of points a teacher is giving this submission object. */
    public points?: number | undefined;
    /**
     * Instantiates a new EducationAssignmentPointsGrade and sets the default values.
     * @param educationAssignmentPointsGradeParameterValue 
     */
    public constructor(educationAssignmentPointsGradeParameterValue?: EducationAssignmentPointsGrade | undefined) {
        super(educationAssignmentPointsGradeParameterValue);
        this.additionalData = educationAssignmentPointsGradeParameterValue?.additionalData ? educationAssignmentPointsGradeParameterValue?.additionalData! : {};
        this.points = educationAssignmentPointsGradeParameterValue?.points;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "points": n => { this.points = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.points){
            writer.writeNumberValue("points", this.points);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
