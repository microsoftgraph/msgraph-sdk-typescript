import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createRubricLevelFromDiscriminatorValue} from './createRubricLevelFromDiscriminatorValue';
import {createRubricQualityFromDiscriminatorValue} from './createRubricQualityFromDiscriminatorValue';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationItemBody} from './educationItemBody';
import {EducationRubric} from './educationRubric';
import {IdentitySet} from './identitySet';
import {EducationAssignmentGradeTypeImpl, EducationItemBodyImpl, EntityImpl, IdentitySetImpl, RubricLevelImpl, RubricQualityImpl} from './index';
import {RubricLevel} from './rubricLevel';
import {RubricQuality} from './rubricQuality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationRubricImpl extends EntityImpl implements EducationRubric {
    /** The user who created this resource. */
    private _createdBy?: IdentitySet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** The description of this rubric. */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric. */
    private _displayName?: string | undefined;
    /** The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric. */
    private _grading?: EducationAssignmentGradeType | undefined;
    /** The last user to modify the resource. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _lastModifiedDateTime?: Date | undefined;
    /** The collection of levels making up this rubric. */
    private _levels?: RubricLevel[] | undefined;
    /** The collection of qualities making up this rubric. */
    private _qualities?: RubricQuality[] | undefined;
    /**
     * Instantiates a new educationRubric and sets the default values.
     * @param educationRubricParameterValue 
     */
    public constructor(educationRubricParameterValue?: EducationRubric | undefined) {
        super(educationRubricParameterValue);
        this._createdBy = educationRubricParameterValue?.createdBy;
        this._createdDateTime = educationRubricParameterValue?.createdDateTime;
        this._description = educationRubricParameterValue?.description;
        this._displayName = educationRubricParameterValue?.displayName;
        this._grading = educationRubricParameterValue?.grading;
        this._lastModifiedBy = educationRubricParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = educationRubricParameterValue?.lastModifiedDateTime;
        this._levels = educationRubricParameterValue?.levels;
        this._qualities = educationRubricParameterValue?.qualities;
    };
    /**
     * Gets the createdBy property value. The user who created this resource.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created this resource.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The description of this rubric.
     * @returns a EducationItemBodyInterface
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        if(value) {
            this._description = value instanceof EducationItemBodyImpl? value : new EducationItemBodyImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name of this rubric.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of this rubric.
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
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "grading": n => { this.grading = n.getObjectValue<EducationAssignmentGradeTypeImpl>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "levels": n => { this.levels = n.getCollectionOfObjectValues<RubricLevelImpl>(createRubricLevelFromDiscriminatorValue); },
            "qualities": n => { this.qualities = n.getCollectionOfObjectValues<RubricQualityImpl>(createRubricQualityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
     * @returns a EducationAssignmentGradeTypeInterface
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        if(value) {
            this._grading = value instanceof EducationAssignmentGradeTypeImpl? value : new EducationAssignmentGradeTypeImpl(value);
        }
    };
    /**
     * Gets the lastModifiedBy property value. The last user to modify the resource.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The last user to modify the resource.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the levels property value. The collection of levels making up this rubric.
     * @returns a RubricLevelInterface
     */
    public get levels() {
        return this._levels;
    };
    /**
     * Sets the levels property value. The collection of levels making up this rubric.
     * @param value Value to set for the levels property.
     */
    public set levels(value: RubricLevel[] | undefined) {
        if(value) {
            const levelsArrValue: RubricLevelImpl[] = [];
            this.levels?.forEach(element => {
                levelsArrValue.push((element instanceof RubricLevelImpl? element:new RubricLevelImpl(element)));
            });
            this._levels = levelsArrValue;
        }
    };
    /**
     * Gets the qualities property value. The collection of qualities making up this rubric.
     * @returns a RubricQualityInterface
     */
    public get qualities() {
        return this._qualities;
    };
    /**
     * Sets the qualities property value. The collection of qualities making up this rubric.
     * @param value Value to set for the qualities property.
     */
    public set qualities(value: RubricQuality[] | undefined) {
        if(value) {
            const qualitiesArrValue: RubricQualityImpl[] = [];
            this.qualities?.forEach(element => {
                qualitiesArrValue.push((element instanceof RubricQualityImpl? element:new RubricQualityImpl(element)));
            });
            this._qualities = qualitiesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeObjectValue<EducationItemBodyImpl>("description", (!this.description || this.description instanceof EducationItemBodyImpl? this.description : new EducationItemBodyImpl(this.description)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.grading){
            writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", (!this.grading || this.grading instanceof EducationAssignmentGradeTypeImpl? this.grading : new EducationAssignmentGradeTypeImpl(this.grading)));
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (!this.lastModifiedBy || this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy : new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.levels && this.levels.length != 0){        const levelsArrValue: RubricLevelImpl[] = [];
        this.levels?.forEach(element => {
            levelsArrValue.push((element instanceof RubricLevelImpl? element:new RubricLevelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricLevelImpl>("levels", levelsArrValue);
        }
        if(this.qualities && this.qualities.length != 0){        const qualitiesArrValue: RubricQualityImpl[] = [];
        this.qualities?.forEach(element => {
            qualitiesArrValue.push((element instanceof RubricQualityImpl? element:new RubricQualityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricQualityImpl>("qualities", qualitiesArrValue);
        }
    };
}
