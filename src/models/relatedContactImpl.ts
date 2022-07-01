import {ContactRelationship} from './contactRelationship';
import {RelatedContact} from './relatedContact';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelatedContactImpl implements RelatedContact {
    /** Indicates whether the user has been consented to access student data. */
    private _accessConsent?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Name of the contact. Required. */
    private _displayName?: string | undefined;
    /** Email address of the contact. */
    private _emailAddress?: string | undefined;
    /** Mobile phone number of the contact. */
    private _mobilePhone?: string | undefined;
    /** Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue. */
    private _relationship?: ContactRelationship | undefined;
    /**
     * Gets the accessConsent property value. Indicates whether the user has been consented to access student data.
     * @returns a boolean
     */
    public get accessConsent() {
        return this._accessConsent;
    };
    /**
     * Sets the accessConsent property value. Indicates whether the user has been consented to access student data.
     * @param value Value to set for the accessConsent property.
     */
    public set accessConsent(value: boolean | undefined) {
        if(value) {
            this._accessConsent = value;
        }
    };
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
     * Instantiates a new relatedContact and sets the default values.
     * @param relatedContactParameterValue 
     */
    public constructor(relatedContactParameterValue?: RelatedContact | undefined) {
        this._accessConsent = relatedContactParameterValue?.accessConsent;
        this._additionalData = relatedContactParameterValue?.additionalData ? relatedContactParameterValue?.additionalData! : {};
        this._displayName = relatedContactParameterValue?.displayName;
        this._emailAddress = relatedContactParameterValue?.emailAddress;
        this._mobilePhone = relatedContactParameterValue?.mobilePhone;
        this._relationship = relatedContactParameterValue?.relationship;
    };
    /**
     * Gets the displayName property value. Name of the contact. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the contact. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the emailAddress property value. Email address of the contact.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email address of the contact.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        if(value) {
            this._emailAddress = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accessConsent": n => { this.accessConsent = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "mobilePhone": n => { this.mobilePhone = n.getStringValue(); },
            "relationship": n => { this.relationship = n.getEnumValue<ContactRelationship>(ContactRelationship); },
        };
    };
    /**
     * Gets the mobilePhone property value. Mobile phone number of the contact.
     * @returns a string
     */
    public get mobilePhone() {
        return this._mobilePhone;
    };
    /**
     * Sets the mobilePhone property value. Mobile phone number of the contact.
     * @param value Value to set for the mobilePhone property.
     */
    public set mobilePhone(value: string | undefined) {
        if(value) {
            this._mobilePhone = value;
        }
    };
    /**
     * Gets the relationship property value. Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue.
     * @returns a contactRelationship
     */
    public get relationship() {
        return this._relationship;
    };
    /**
     * Sets the relationship property value. Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue.
     * @param value Value to set for the relationship property.
     */
    public set relationship(value: ContactRelationship | undefined) {
        if(value) {
            this._relationship = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.accessConsent){
            writer.writeBooleanValue("accessConsent", this.accessConsent);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.mobilePhone){
            writer.writeStringValue("mobilePhone", this.mobilePhone);
        }
        if(this.relationship){
            writer.writeEnumValue<ContactRelationship>("relationship", this.relationship);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
