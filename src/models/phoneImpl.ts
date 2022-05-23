import {Phone} from './phone';
import {PhoneType} from './phoneType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhoneImpl implements AdditionalDataHolder, Parsable, Phone {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The language property */
    public language?: string | undefined;
    /** The phone number. */
    public number?: string | undefined;
    /** The region property */
    public region?: string | undefined;
    /** The type of phone number. Possible values are: home, business, mobile, other, assistant, homeFax, businessFax, otherFax, pager, radio. */
    public type?: PhoneType | undefined;
    /**
     * Instantiates a new phone and sets the default values.
     * @param phoneParameterValue 
     */
    public constructor(phoneParameterValue?: Phone | undefined) {
        this.additionalData = phoneParameterValue?.additionalData ? phoneParameterValue?.additionalData! : {}
        this.language = phoneParameterValue?.language ;
        this.number = phoneParameterValue?.number ;
        this.region = phoneParameterValue?.region ;
        this.type = phoneParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "language": n => { this.language = n.getStringValue(); },
            "number": n => { this.number = n.getStringValue(); },
            "region": n => { this.region = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PhoneType>(PhoneType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.language){
        writer.writeStringValue("language", this.language);
        }
        if(this.number){
        writer.writeStringValue("number", this.number);
        }
        if(this.region){
        writer.writeStringValue("region", this.region);
        }
        if(this.type){
        writer.writeEnumValue<PhoneType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
