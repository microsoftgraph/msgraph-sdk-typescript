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

export class EducationClassImpl extends EntityImpl implements EducationClass, Parsable {
    /** All categories associated with this class. Nullable. */
    assignmentCategories?: EducationCategory[] | undefined;
    /** Specifies class-level defaults respected by new assignments created in the class. */
    assignmentDefaults?: EducationAssignmentDefaults | undefined;
    /** All assignments associated with this class. Nullable. */
    assignments?: EducationAssignment[] | undefined;
    /** Specifies class-level assignments settings. */
    assignmentSettings?: EducationAssignmentSettings | undefined;
    /** Class code used by the school to identify the class. */
    classCode?: string | undefined;
    /** Course information for the class. */
    course?: EducationCourse | undefined;
    /** Entity who created the class. */
    createdBy?: IdentitySet | undefined;
    /** Description of the class. */
    description?: string | undefined;
    /** Name of the class. */
    displayName?: string | undefined;
    /** ID of the class from the syncing system. */
    externalId?: string | undefined;
    /** Name of the class in the syncing system. */
    externalName?: string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
    externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?: string | undefined;
    /** Grade level of the class. */
    grade?: string | undefined;
    /** The underlying Microsoft 365 group object. */
    group?: Group | undefined;
    /** Mail name for sending email to all members, if this is enabled. */
    mailNickname?: string | undefined;
    /** All users in the class. Nullable. */
    members?: EducationUser[] | undefined;
    /** All schools that this class is associated with. Nullable. */
    schools?: EducationSchool[] | undefined;
    /** All teachers in the class. Nullable. */
    teachers?: EducationUser[] | undefined;
    /** Term for the class. */
    term?: EducationTerm | undefined;
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
        if(this.assignmentCategories){
        const assignmentCategoriesArrValue: EducationCategoryImpl[] = []; this.assignmentCategories?.forEach(element => {assignmentCategoriesArrValue.push(new EducationCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<EducationCategoryImpl>("assignmentCategories", assignmentCategoriesArrValue);
        }
        if(this.assignmentDefaults){
        if(this.assignmentDefaults)
        writer.writeObjectValue<EducationAssignmentDefaultsImpl>("assignmentDefaults", new EducationAssignmentDefaultsImpl(this.assignmentDefaults));
        }
        if(this.assignments){
        const assignmentsArrValue: EducationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new EducationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<EducationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.assignmentSettings){
        if(this.assignmentSettings)
        writer.writeObjectValue<EducationAssignmentSettingsImpl>("assignmentSettings", new EducationAssignmentSettingsImpl(this.assignmentSettings));
        }
        if(this.classCode){
        if(this.classCode)
        writer.writeStringValue("classCode", this.classCode);
        }
        if(this.course){
        if(this.course)
        writer.writeObjectValue<EducationCourseImpl>("course", new EducationCourseImpl(this.course));
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalId){
        if(this.externalId)
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.externalName){
        if(this.externalName)
        writer.writeStringValue("externalName", this.externalName);
        }
        if(this.externalSource){
        if(this.externalSource)
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        }
        if(this.externalSourceDetail){
        if(this.externalSourceDetail)
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        }
        if(this.grade){
        if(this.grade)
        writer.writeStringValue("grade", this.grade);
        }
        if(this.group){
        if(this.group)
        writer.writeObjectValue<GroupImpl>("group", new GroupImpl(this.group));
        }
        if(this.mailNickname){
        if(this.mailNickname)
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.members){
        const membersArrValue: EducationUserImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("members", membersArrValue);
        }
        if(this.schools){
        const schoolsArrValue: EducationSchoolImpl[] = []; this.schools?.forEach(element => {schoolsArrValue.push(new EducationSchoolImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.teachers){
        const teachersArrValue: EducationUserImpl[] = []; this.teachers?.forEach(element => {teachersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("teachers", teachersArrValue);
        }
        if(this.term){
        if(this.term)
        writer.writeObjectValue<EducationTermImpl>("term", new EducationTermImpl(this.term));
        }
    };
}
