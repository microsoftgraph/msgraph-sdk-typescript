import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {EducationAssignmentGradeTypeImpl, EducationItemBodyImpl} from './index';
import {RubricLevel} from './rubricLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricLevelImpl implements AdditionalDataHolder, Parsable, RubricLevel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The description of this rubric level. */
    public description?: EducationItemBody | undefined;
    /** The name of this rubric level. */
    public displayName?: string | undefined;
    /** Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric. */
    public grading?: EducationAssignmentGradeType | undefined;
    /** The ID of this resource. */
    public levelId?: string | undefined;
    /**
     * Instantiates a new rubricLevel and sets the default values.
     * @param rubricLevelParameterValue 
     */
    public constructor(rubricLevelParameterValue?: RubricLevel | undefined) {
        this.additionalData = rubricLevelParameterValue?.additionalData ? rubricLevelParameterValue?.additionalData! : {}
        this.description = rubricLevelParameterValue?.description ;
        this.displayName = rubricLevelParameterValue?.displayName ;
        this.grading = rubricLevelParameterValue?.grading ;
        this.levelId = rubricLevelParameterValue?.levelId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "grading": n => { this.grading = n.getObjectValue<EducationAssignmentGradeTypeImpl>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
            "levelId": n => { this.levelId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeObjectValue<EducationItemBodyImpl>("description", new EducationItemBodyImpl(this.description));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.grading){
        writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", new EducationAssignmentGradeTypeImpl(this.grading));
        }
        if(this.levelId){
        writer.writeStringValue("levelId", this.levelId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
