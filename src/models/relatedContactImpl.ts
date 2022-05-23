import {ContactRelationship} from './contactRelationship';
import {RelatedContact} from './relatedContact';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelatedContactImpl implements AdditionalDataHolder, Parsable, RelatedContact {
    /** Indicates whether the user has been consented to access student data. */
    public accessConsent?: boolean | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Name of the contact. Required. */
    public displayName?: string | undefined;
    /** Email address of the contact. */
    public emailAddress?: string | undefined;
    /** Mobile phone number of the contact. */
    public mobilePhone?: string | undefined;
    /** Relationship to the user. Possible values are: parent, relative, aide, doctor, guardian, child, other, unknownFutureValue. */
    public relationship?: ContactRelationship | undefined;
    /**
     * Instantiates a new relatedContact and sets the default values.
     * @param relatedContactParameterValue 
     */
    public constructor(relatedContactParameterValue?: RelatedContact | undefined) {
        this.accessConsent = relatedContactParameterValue?.accessConsent ;
        this.additionalData = relatedContactParameterValue?.additionalData ? relatedContactParameterValue?.additionalData! : {}
        this.displayName = relatedContactParameterValue?.displayName ;
        this.emailAddress = relatedContactParameterValue?.emailAddress ;
        this.mobilePhone = relatedContactParameterValue?.mobilePhone ;
        this.relationship = relatedContactParameterValue?.relationship ;
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
