import {DataSubject} from './dataSubject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DataSubjectImpl implements DataSubject {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Email of the data subject. */
    private _email?: string | undefined;
    /** First name of the data subject. */
    private _firstName?: string | undefined;
    /** Last Name of the data subject. */
    private _lastName?: string | undefined;
    /** The country/region of residency. The residency information is uesed only for internal reporting but not for the content search. */
    private _residency?: string | undefined;
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
     * Instantiates a new dataSubject and sets the default values.
     * @param dataSubjectParameterValue 
     */
    public constructor(dataSubjectParameterValue?: DataSubject | undefined) {
        this._additionalData = dataSubjectParameterValue?.additionalData ? dataSubjectParameterValue?.additionalData! : {};
        this._email = dataSubjectParameterValue?.email;
        this._firstName = dataSubjectParameterValue?.firstName;
        this._lastName = dataSubjectParameterValue?.lastName;
        this._residency = dataSubjectParameterValue?.residency;
    };
    /**
     * Gets the email property value. Email of the data subject.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. Email of the data subject.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        if(value) {
            this._email = value;
        }
    };
    /**
     * Gets the firstName property value. First name of the data subject.
     * @returns a string
     */
    public get firstName() {
        return this._firstName;
    };
    /**
     * Sets the firstName property value. First name of the data subject.
     * @param value Value to set for the firstName property.
     */
    public set firstName(value: string | undefined) {
        if(value) {
            this._firstName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "email": n => { this.email = n.getStringValue(); },
            "firstName": n => { this.firstName = n.getStringValue(); },
            "lastName": n => { this.lastName = n.getStringValue(); },
            "residency": n => { this.residency = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastName property value. Last Name of the data subject.
     * @returns a string
     */
    public get lastName() {
        return this._lastName;
    };
    /**
     * Sets the lastName property value. Last Name of the data subject.
     * @param value Value to set for the lastName property.
     */
    public set lastName(value: string | undefined) {
        if(value) {
            this._lastName = value;
        }
    };
    /**
     * Gets the residency property value. The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.
     * @returns a string
     */
    public get residency() {
        return this._residency;
    };
    /**
     * Sets the residency property value. The country/region of residency. The residency information is uesed only for internal reporting but not for the content search.
     * @param value Value to set for the residency property.
     */
    public set residency(value: string | undefined) {
        if(value) {
            this._residency = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.email){
            writer.writeStringValue("email", this.email);
        }
        if(this.firstName){
            writer.writeStringValue("firstName", this.firstName);
        }
        if(this.lastName){
            writer.writeStringValue("lastName", this.lastName);
        }
        if(this.residency){
            writer.writeStringValue("residency", this.residency);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
