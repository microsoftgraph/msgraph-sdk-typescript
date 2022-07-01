import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {EducationAssignmentGradeTypeImpl, EducationItemBodyImpl} from './index';
import {RubricLevel} from './rubricLevel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricLevelImpl implements RubricLevel {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The description of this rubric level. */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric level. */
    private _displayName?: string | undefined;
    /** Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric. */
    private _grading?: EducationAssignmentGradeType | undefined;
    /** The ID of this resource. */
    private _levelId?: string | undefined;
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
     * Instantiates a new rubricLevel and sets the default values.
     * @param rubricLevelParameterValue 
     */
    public constructor(rubricLevelParameterValue?: RubricLevel | undefined) {
        this._additionalData = rubricLevelParameterValue?.additionalData ? rubricLevelParameterValue?.additionalData! : {};
        this._description = rubricLevelParameterValue?.description;
        this._displayName = rubricLevelParameterValue?.displayName;
        this._grading = rubricLevelParameterValue?.grading;
        this._levelId = rubricLevelParameterValue?.levelId;
    };
    /**
     * Gets the description property value. The description of this rubric level.
     * @returns a EducationItemBodyInterface
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric level.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        if(value) {
            this._description = value instanceof EducationItemBodyImpl? value : new EducationItemBodyImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name of this rubric level.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of this rubric level.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the grading property value. Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
     * @returns a EducationAssignmentGradeTypeInterface
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        if(value) {
            this._grading = value instanceof EducationAssignmentGradeTypeImpl? value : new EducationAssignmentGradeTypeImpl(value);
        }
    };
    /**
     * Gets the levelId property value. The ID of this resource.
     * @returns a string
     */
    public get levelId() {
        return this._levelId;
    };
    /**
     * Sets the levelId property value. The ID of this resource.
     * @param value Value to set for the levelId property.
     */
    public set levelId(value: string | undefined) {
        if(value) {
            this._levelId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeObjectValue<EducationItemBodyImpl>("description", (!this.description || this.description instanceof EducationItemBodyImpl? this.description : new EducationItemBodyImpl(this.description)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.grading){
            writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", (!this.grading || this.grading instanceof EducationAssignmentGradeTypeImpl? this.grading : new EducationAssignmentGradeTypeImpl(this.grading)));
        }
        if(this.levelId){
            writer.writeStringValue("levelId", this.levelId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
