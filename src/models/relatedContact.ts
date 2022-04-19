import {ContactRelationship} from './contactRelationship';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelatedContact implements AdditionalDataHolder, Parsable {
    /** Indicates whether the user has been consented to access student data.  */
    private _accessConsent?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Name of the contact. Required.  */
    private _displayName?: string | undefined;
    /** Primary email address of the contact. Required.  */
    private _emailAddress?: string | undefined;
    /** Mobile phone number of the contact.  */
    private _mobilePhone?: string | undefined;
    /** Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue.  */
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
        this._accessConsent = value;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new relatedContact and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
        this._displayName = value;
    };
    /**
     * Gets the emailAddress property value. Primary email address of the contact. Required.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Primary email address of the contact. Required.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
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
        this._mobilePhone = value;
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
        this._relationship = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("accessConsent", this.accessConsent);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeEnumValue<ContactRelationship>("relationship", this.relationship);
        writer.writeAdditionalData(this.additionalData);
    };
}
