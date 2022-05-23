import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationClass} from './educationClass';
import {EducationRoot} from './educationRoot';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {EducationClassImpl, EducationSchoolImpl, EducationUserImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRootImpl implements AdditionalDataHolder, EducationRoot, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The classes property */
    public classes?: EducationClass[] | undefined;
    /** The me property */
    public me?: EducationUser | undefined;
    /** The schools property */
    public schools?: EducationSchool[] | undefined;
    /** The users property */
    public users?: EducationUser[] | undefined;
    /**
     * Instantiates a new EducationRoot and sets the default values.
     * @param educationRootParameterValue 
     */
    public constructor(educationRootParameterValue?: EducationRoot | undefined) {
        this.additionalData = educationRootParameterValue?.additionalData ? educationRootParameterValue?.additionalData! : {}
        this.classes = educationRootParameterValue?.classes ;
        this.me = educationRootParameterValue?.me ;
        this.schools = educationRootParameterValue?.schools ;
        this.users = educationRootParameterValue?.users ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "classes": n => { this.classes = n.getCollectionOfObjectValues<EducationClassImpl>(createEducationClassFromDiscriminatorValue); },
            "me": n => { this.me = n.getObjectValue<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchoolImpl>(createEducationSchoolFromDiscriminatorValue); },
            "users": n => { this.users = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.classes && this.classes.length != 0){        const classesArrValue: EducationClassImpl[] = []; this.classes?.forEach(element => {classesArrValue.push(new EducationClassImpl(element));});
        writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.me){
        writer.writeObjectValue<EducationUserImpl>("me", new EducationUserImpl(this.me));
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = []; this.schools?.forEach(element => {schoolsArrValue.push(new EducationSchoolImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.users && this.users.length != 0){        const usersArrValue: EducationUserImpl[] = []; this.users?.forEach(element => {usersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("users", usersArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
