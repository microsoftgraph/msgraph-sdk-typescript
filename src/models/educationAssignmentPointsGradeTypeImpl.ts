import {EducationAssignmentPointsGradeType} from './educationAssignmentPointsGradeType';
import {EducationAssignmentGradeTypeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentPointsGradeTypeImpl extends EducationAssignmentGradeTypeImpl implements EducationAssignmentPointsGradeType {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Max points possible for this assignment. */
    public maxPoints?: number | undefined;
    /**
     * Instantiates a new EducationAssignmentPointsGradeType and sets the default values.
     * @param educationAssignmentPointsGradeTypeParameterValue 
     */
    public constructor(educationAssignmentPointsGradeTypeParameterValue?: EducationAssignmentPointsGradeType | undefined) {
        super(educationAssignmentPointsGradeTypeParameterValue);
        this.additionalData = educationAssignmentPointsGradeTypeParameterValue?.additionalData ? educationAssignmentPointsGradeTypeParameterValue?.additionalData! : {};
        this.maxPoints = educationAssignmentPointsGradeTypeParameterValue?.maxPoints;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "maxPoints": n => { this.maxPoints = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.maxPoints){
            writer.writeNumberValue("maxPoints", this.maxPoints);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
