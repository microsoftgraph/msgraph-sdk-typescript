import {DataSubject} from './dataSubject';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DataSubjectImpl implements AdditionalDataHolder, DataSubject, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Email of the data subject. */
    public email?: string | undefined;
    /** First name of the data subject. */
    public firstName?: string | undefined;
    /** Last Name of the data subject. */
    public lastName?: string | undefined;
    /** The country/region of residency. The residency information is uesed only for internal reporting but not for the content search. */
    public residency?: string | undefined;
    /**
     * Instantiates a new dataSubject and sets the default values.
     * @param dataSubjectParameterValue 
     */
    public constructor(dataSubjectParameterValue?: DataSubject | undefined) {
        this.additionalData = dataSubjectParameterValue?.additionalData ? dataSubjectParameterValue?.additionalData! : {}
        this.email = dataSubjectParameterValue?.email ;
        this.firstName = dataSubjectParameterValue?.firstName ;
        this.lastName = dataSubjectParameterValue?.lastName ;
        this.residency = dataSubjectParameterValue?.residency ;
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
