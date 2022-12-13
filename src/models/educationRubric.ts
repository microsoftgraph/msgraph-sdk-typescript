import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createRubricLevelFromDiscriminatorValue} from './createRubricLevelFromDiscriminatorValue';
import {createRubricQualityFromDiscriminatorValue} from './createRubricQualityFromDiscriminatorValue';
import {EducationAssignmentGradeType, EducationItemBody, Entity, IdentitySet, RubricLevel, RubricQuality} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreementAcceptance entities.
 */
export class EducationRubric extends Entity implements Parsable {
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
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The user who created this resource.
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created this resource.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
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
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description of this rubric.
     * @returns a educationItemBody
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        this._description = value;
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
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "grading": n => { this.grading = n.getObjectValue<EducationAssignmentGradeType>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "levels": n => { this.levels = n.getCollectionOfObjectValues<RubricLevel>(createRubricLevelFromDiscriminatorValue); },
            "qualities": n => { this.qualities = n.getCollectionOfObjectValues<RubricQuality>(createRubricQualityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
     * @returns a educationAssignmentGradeType
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        this._grading = value;
    };
    /**
     * Gets the lastModifiedBy property value. The last user to modify the resource.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The last user to modify the resource.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
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
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the levels property value. The collection of levels making up this rubric.
     * @returns a rubricLevel
     */
    public get levels() {
        return this._levels;
    };
    /**
     * Sets the levels property value. The collection of levels making up this rubric.
     * @param value Value to set for the levels property.
     */
    public set levels(value: RubricLevel[] | undefined) {
        this._levels = value;
    };
    /**
     * Gets the qualities property value. The collection of qualities making up this rubric.
     * @returns a rubricQuality
     */
    public get qualities() {
        return this._qualities;
    };
    /**
     * Sets the qualities property value. The collection of qualities making up this rubric.
     * @param value Value to set for the qualities property.
     */
    public set qualities(value: RubricQuality[] | undefined) {
        this._qualities = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EducationItemBody>("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<EducationAssignmentGradeType>("grading", this.grading);
        writer.writeCollectionOfObjectValues<RubricLevel>("levels", this.levels);
        writer.writeCollectionOfObjectValues<RubricQuality>("qualities", this.qualities);
    };
}
