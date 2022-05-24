import {createEducationAssignmentDefaultsFromDiscriminatorValue} from './createEducationAssignmentDefaultsFromDiscriminatorValue';
import {createEducationAssignmentFromDiscriminatorValue} from './createEducationAssignmentFromDiscriminatorValue';
import {createEducationAssignmentSettingsFromDiscriminatorValue} from './createEducationAssignmentSettingsFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationCourseFromDiscriminatorValue} from './createEducationCourseFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationTermFromDiscriminatorValue} from './createEducationTermFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EducationCategory} from './educationCategory';
import {EducationClass} from './educationClass';
import {EducationCourse} from './educationCourse';
import {EducationExternalSource} from './educationExternalSource';
import {EducationSchool} from './educationSchool';
import {EducationTerm} from './educationTerm';
import {EducationUser} from './educationUser';
import {Group} from './group';
import {IdentitySet} from './identitySet';
import {EducationAssignmentDefaultsImpl, EducationAssignmentImpl, EducationAssignmentSettingsImpl, EducationCategoryImpl, EducationCourseImpl, EducationSchoolImpl, EducationTermImpl, EducationUserImpl, EntityImpl, GroupImpl, IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationClassImpl extends EntityImpl implements EducationClass, Parsable {
    /** All categories associated with this class. Nullable. */
    public assignmentCategories?: EducationCategory[] | undefined;
    /** Specifies class-level defaults respected by new assignments created in the class. */
    public assignmentDefaults?: EducationAssignmentDefaults | undefined;
    /** All assignments associated with this class. Nullable. */
    public assignments?: EducationAssignment[] | undefined;
    /** Specifies class-level assignments settings. */
    public assignmentSettings?: EducationAssignmentSettings | undefined;
    /** Class code used by the school to identify the class. */
    public classCode?: string | undefined;
    /** Course information for the class. */
    public course?: EducationCourse | undefined;
    /** Entity who created the class. */
    public createdBy?: IdentitySet | undefined;
    /** Description of the class. */
    public description?: string | undefined;
    /** Name of the class. */
    public displayName?: string | undefined;
    /** ID of the class from the syncing system. */
    public externalId?: string | undefined;
    /** Name of the class in the syncing system. */
    public externalName?: string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    public externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    public externalSourceDetail?: string | undefined;
    /** Grade level of the class. */
    public grade?: string | undefined;
    /** The underlying Microsoft 365 group object. */
    public group?: Group | undefined;
    /** Mail name for sending email to all members, if this is enabled. */
    public mailNickname?: string | undefined;
    /** All users in the class. Nullable. */
    public members?: EducationUser[] | undefined;
    /** All schools that this class is associated with. Nullable. */
    public schools?: EducationSchool[] | undefined;
    /** All teachers in the class. Nullable. */
    public teachers?: EducationUser[] | undefined;
    /** Term for the class. */
    public term?: EducationTerm | undefined;
    /**
     * Instantiates a new educationClass and sets the default values.
     * @param educationClassParameterValue 
     */
    public constructor(educationClassParameterValue?: EducationClass | undefined) {
        super();
        this.assignmentCategories = educationClassParameterValue?.assignmentCategories ;
        this.assignmentDefaults = educationClassParameterValue?.assignmentDefaults ;
        this.assignments = educationClassParameterValue?.assignments ;
        this.assignmentSettings = educationClassParameterValue?.assignmentSettings ;
        this.classCode = educationClassParameterValue?.classCode ;
        this.course = educationClassParameterValue?.course ;
        this.createdBy = educationClassParameterValue?.createdBy ;
        this.description = educationClassParameterValue?.description ;
        this.displayName = educationClassParameterValue?.displayName ;
        this.externalId = educationClassParameterValue?.externalId ;
        this.externalName = educationClassParameterValue?.externalName ;
        this.externalSource = educationClassParameterValue?.externalSource ;
        this.externalSourceDetail = educationClassParameterValue?.externalSourceDetail ;
        this.grade = educationClassParameterValue?.grade ;
        this.group = educationClassParameterValue?.group ;
        this.mailNickname = educationClassParameterValue?.mailNickname ;
        this.members = educationClassParameterValue?.members ;
        this.schools = educationClassParameterValue?.schools ;
        this.teachers = educationClassParameterValue?.teachers ;
        this.term = educationClassParameterValue?.term ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentCategories": n => { this.assignmentCategories = n.getCollectionOfObjectValues<EducationCategoryImpl>(createEducationCategoryFromDiscriminatorValue); },
            "assignmentDefaults": n => { this.assignmentDefaults = n.getObjectValue<EducationAssignmentDefaultsImpl>(createEducationAssignmentDefaultsFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EducationAssignmentImpl>(createEducationAssignmentFromDiscriminatorValue); },
            "assignmentSettings": n => { this.assignmentSettings = n.getObjectValue<EducationAssignmentSettingsImpl>(createEducationAssignmentSettingsFromDiscriminatorValue); },
            "classCode": n => { this.classCode = n.getStringValue(); },
            "course": n => { this.course = n.getObjectValue<EducationCourseImpl>(createEducationCourseFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "externalName": n => { this.externalName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
            "grade": n => { this.grade = n.getStringValue(); },
            "group": n => { this.group = n.getObjectValue<GroupImpl>(createGroupFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchoolImpl>(createEducationSchoolFromDiscriminatorValue); },
            "teachers": n => { this.teachers = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
            "term": n => { this.term = n.getObjectValue<EducationTermImpl>(createEducationTermFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignmentCategories && this.assignmentCategories.length != 0){        const assignmentCategoriesArrValue: EducationCategoryImpl[] = []; this.assignmentCategories?.forEach(element => {assignmentCategoriesArrValue.push(new EducationCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<EducationCategoryImpl>("assignmentCategories", assignmentCategoriesArrValue);
        }
        if(this.assignmentDefaults){
        writer.writeObjectValue<EducationAssignmentDefaultsImpl>("assignmentDefaults", new EducationAssignmentDefaultsImpl(this.assignmentDefaults));
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EducationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new EducationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<EducationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.assignmentSettings){
        writer.writeObjectValue<EducationAssignmentSettingsImpl>("assignmentSettings", new EducationAssignmentSettingsImpl(this.assignmentSettings));
        }
        if(this.classCode){
        writer.writeStringValue("classCode", this.classCode);
        }
        if(this.course){
        writer.writeObjectValue<EducationCourseImpl>("course", new EducationCourseImpl(this.course));
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.externalName){
        writer.writeStringValue("externalName", this.externalName);
        }
        if(this.externalSource){
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        }
        if(this.externalSourceDetail){
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        }
        if(this.grade){
        writer.writeStringValue("grade", this.grade);
        }
        if(this.group){
        writer.writeObjectValue<GroupImpl>("group", new GroupImpl(this.group));
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: EducationUserImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("members", membersArrValue);
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = []; this.schools?.forEach(element => {schoolsArrValue.push(new EducationSchoolImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.teachers && this.teachers.length != 0){        const teachersArrValue: EducationUserImpl[] = []; this.teachers?.forEach(element => {teachersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("teachers", teachersArrValue);
        }
        if(this.term){
        writer.writeObjectValue<EducationTermImpl>("term", new EducationTermImpl(this.term));
        }
    };
}
