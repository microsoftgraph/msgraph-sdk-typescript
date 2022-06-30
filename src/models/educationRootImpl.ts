import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationClass} from './educationClass';
import {EducationRoot} from './educationRoot';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {EducationClassImpl, EducationSchoolImpl, EducationUserImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRootImpl implements EducationRoot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The classes property */
    private _classes?: EducationClass[] | undefined;
    /** The me property */
    private _me?: EducationUser | undefined;
    /** The schools property */
    private _schools?: EducationSchool[] | undefined;
    /** The users property */
    private _users?: EducationUser[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the classes property value. The classes property
     * @returns a EducationClassInterface
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. The classes property
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        if(value) {
            const classesArrValue: EducationClassImpl[] = [];
            this.classes?.forEach(element => {
                classesArrValue.push((element instanceof EducationClassImpl? element:new EducationClassImpl(element)));
            });
            this._classes = classesArrValue;
        }
    };
    /**
     * Instantiates a new EducationRoot and sets the default values.
     * @param educationRootParameterValue 
     */
    public constructor(educationRootParameterValue?: EducationRoot | undefined) {
        this._additionalData = educationRootParameterValue?.additionalData ? educationRootParameterValue?.additionalData! : {};
        this._classes = educationRootParameterValue?.classes;
        this._me = educationRootParameterValue?.me;
        this._schools = educationRootParameterValue?.schools;
        this._users = educationRootParameterValue?.users;
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
     * Gets the me property value. The me property
     * @returns a EducationUserInterface
     */
    public get me() {
        return this._me;
    };
    /**
     * Sets the me property value. The me property
     * @param value Value to set for the me property.
     */
    public set me(value: EducationUser | undefined) {
        if(value) {
            this._me = value instanceof EducationUserImpl? value : new EducationUserImpl(value);
        }
    };
    /**
     * Gets the schools property value. The schools property
     * @returns a EducationSchoolInterface
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. The schools property
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        if(value) {
            const schoolsArrValue: EducationSchoolImpl[] = [];
            this.schools?.forEach(element => {
                schoolsArrValue.push((element instanceof EducationSchoolImpl? element:new EducationSchoolImpl(element)));
            });
            this._schools = schoolsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.classes && this.classes.length != 0){        const classesArrValue: EducationClassImpl[] = [];
        this.classes?.forEach(element => {
            classesArrValue.push((element instanceof EducationClassImpl? element:new EducationClassImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.me){
            writer.writeObjectValue<EducationUserImpl>("me", (!this.me || this.me instanceof EducationUserImpl? this.me : new EducationUserImpl(this.me)));
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = [];
        this.schools?.forEach(element => {
            schoolsArrValue.push((element instanceof EducationSchoolImpl? element:new EducationSchoolImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.users && this.users.length != 0){        const usersArrValue: EducationUserImpl[] = [];
        this.users?.forEach(element => {
            usersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationUserImpl>("users", usersArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the users property value. The users property
     * @returns a EducationUserInterface
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. The users property
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        if(value) {
            const usersArrValue: EducationUserImpl[] = [];
            this.users?.forEach(element => {
                usersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
            });
            this._users = usersArrValue;
        }
    };
}
