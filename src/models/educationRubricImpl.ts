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
export class EducationRubricImpl extends EntityImpl implements EducationRubric, Parsable {
    /** The user who created this resource. */
    public createdBy?: IdentitySet | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public createdDateTime?: Date | undefined;
    /** The description of this rubric. */
    public description?: EducationItemBody | undefined;
    /** The name of this rubric. */
    public displayName?: string | undefined;
    /** The grading type of this rubric -- null for a no-points rubric, or educationAssignmentPointsGradeType for a points rubric. */
    public grading?: EducationAssignmentGradeType | undefined;
    /** The last user to modify the resource. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Moment in time when the resource was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public lastModifiedDateTime?: Date | undefined;
    /** The collection of levels making up this rubric. */
    public levels?: RubricLevel[] | undefined;
    /** The collection of qualities making up this rubric. */
    public qualities?: RubricQuality[] | undefined;
    /**
     * Instantiates a new educationRubric and sets the default values.
     * @param educationRubricParameterValue 
     */
    public constructor(educationRubricParameterValue?: EducationRubric | undefined) {
        super();
        this.createdBy = educationRubricParameterValue?.createdBy ;
        this.createdDateTime = educationRubricParameterValue?.createdDateTime ;
        this.description = educationRubricParameterValue?.description ;
        this.displayName = educationRubricParameterValue?.displayName ;
        this.grading = educationRubricParameterValue?.grading ;
        this.lastModifiedBy = educationRubricParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = educationRubricParameterValue?.lastModifiedDateTime ;
        this.levels = educationRubricParameterValue?.levels ;
        this.qualities = educationRubricParameterValue?.qualities ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeObjectValue<EducationItemBodyImpl>("description", new EducationItemBodyImpl(this.description));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.grading){
        writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", new EducationAssignmentGradeTypeImpl(this.grading));
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.levels && this.levels.length != 0){        const levelsArrValue: RubricLevelImpl[] = []; this.levels?.forEach(element => {levelsArrValue.push(new RubricLevelImpl(element));});
        writer.writeCollectionOfObjectValues<RubricLevelImpl>("levels", levelsArrValue);
        }
        if(this.qualities && this.qualities.length != 0){        const qualitiesArrValue: RubricQualityImpl[] = []; this.qualities?.forEach(element => {qualitiesArrValue.push(new RubricQualityImpl(element));});
        writer.writeCollectionOfObjectValues<RubricQualityImpl>("qualities", qualitiesArrValue);
        }
    };
}
