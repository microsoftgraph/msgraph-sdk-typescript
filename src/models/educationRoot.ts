import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationClass, EducationSchool, EducationUser} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _classes?: EducationClass[] | undefined;
    private _me?: EducationUser | undefined;
    private _odataType?: string | undefined;
    private _schools?: EducationSchool[] | undefined;
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
        this._additionalData = value;
    };
    /**
     * Gets the classes property value. 
     * @returns a educationClass
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. 
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        this._classes = value;
    };
    /**
     * Instantiates a new EducationRoot and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "classes": n => { this.classes = n.getCollectionOfObjectValues<EducationClass>(createEducationClassFromDiscriminatorValue); },
            "me": n => { this.me = n.getObjectValue<EducationUser>(createEducationUserFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
            "users": n => { this.users = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the me property value. 
     * @returns a educationUser
     */
    public get me() {
        return this._me;
    };
    /**
     * Sets the me property value. 
     * @param value Value to set for the me property.
     */
    public set me(value: EducationUser | undefined) {
        this._me = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the schools property value. 
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. 
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<EducationClass>("classes", this.classes);
        writer.writeObjectValue<EducationUser>("me", this.me);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", this.schools);
        writer.writeCollectionOfObjectValues<EducationUser>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the users property value. 
     * @returns a educationUser
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. 
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        this._users = value;
    };
}
