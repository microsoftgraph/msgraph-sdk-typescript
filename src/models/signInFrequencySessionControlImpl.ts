import {ConditionalAccessSessionControlImpl} from './index';
import {SignInFrequencySessionControl} from './signInFrequencySessionControl';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class SignInFrequencySessionControlImpl extends ConditionalAccessSessionControlImpl implements Parsable, SignInFrequencySessionControl {
    /** Possible values are: days, hours. */
    public type?: SigninFrequencyType | undefined;
    /** The number of days or hours. */
    public value?: number | undefined;
    /**
     * Instantiates a new signInFrequencySessionControl and sets the default values.
     * @param signInFrequencySessionControlParameterValue 
     */
    public constructor(signInFrequencySessionControlParameterValue?: SignInFrequencySessionControl | undefined) {
        super();
        this.type = signInFrequencySessionControlParameterValue?.type ;
        this.value = signInFrequencySessionControlParameterValue?.value ;
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
    };
}
