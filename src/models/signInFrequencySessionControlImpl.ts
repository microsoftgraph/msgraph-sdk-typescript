import {ConditionalAccessSessionControlImpl} from './index';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInFrequencySessionControlImpl extends ConditionalAccessSessionControlImpl implements SignInFrequencySessionControl {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Possible values are: days, hours, or null if frequencyInterval is everyTime . */
    public type?: SigninFrequencyType | undefined;
    /** The number of days or hours. */
    public value?: number | undefined;
    /**
     * Instantiates a new SignInFrequencySessionControl and sets the default values.
     * @param signInFrequencySessionControlParameterValue 
     */
    public constructor(signInFrequencySessionControlParameterValue?: SignInFrequencySessionControl | undefined) {
        super(signInFrequencySessionControlParameterValue);
        this.additionalData = signInFrequencySessionControlParameterValue?.additionalData ? signInFrequencySessionControlParameterValue?.additionalData! : {};
        this.type = signInFrequencySessionControlParameterValue?.type;
        this.value = signInFrequencySessionControlParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "type": n => { this.type = n.getEnumValue<SigninFrequencyType>(SigninFrequencyType); },
            "value": n => { this.value = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.type){
            writer.writeEnumValue<SigninFrequencyType>("type", this.type);
        }
        if(this.value){
            writer.writeNumberValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
