import {ConditionalAccessSessionControl} from './index';
import {SignInFrequencyAuthenticationType} from './signInFrequencyAuthenticationType';
import {SignInFrequencyInterval} from './signInFrequencyInterval';
import {SigninFrequencyType} from './signinFrequencyType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInFrequencySessionControl extends ConditionalAccessSessionControl implements Parsable {
    /** The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue. */
    private _authenticationType?: SignInFrequencyAuthenticationType | undefined;
    /** The possible values are timeBased, everyTime, unknownFutureValue. */
    private _frequencyInterval?: SignInFrequencyInterval | undefined;
    /** Possible values are: days, hours, or null if frequencyInterval is everyTime . */
    private _type?: SigninFrequencyType | undefined;
    /** The number of days or hours. */
    private _value?: number | undefined;
    /**
     * Gets the authenticationType property value. The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue.
     * @returns a signInFrequencyAuthenticationType
     */
    public get authenticationType() {
        return this._authenticationType;
    };
    /**
     * Sets the authenticationType property value. The possible values are primaryAndSecondaryAuthentication, secondaryAuthentication, unknownFutureValue.
     * @param value Value to set for the authenticationType property.
     */
    public set authenticationType(value: SignInFrequencyAuthenticationType | undefined) {
        this._authenticationType = value;
    };
    /**
     * Instantiates a new SignInFrequencySessionControl and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.signInFrequencySessionControl";
    };
    /**
     * Gets the frequencyInterval property value. The possible values are timeBased, everyTime, unknownFutureValue.
     * @returns a signInFrequencyInterval
     */
    public get frequencyInterval() {
        return this._frequencyInterval;
    };
    /**
     * Sets the frequencyInterval property value. The possible values are timeBased, everyTime, unknownFutureValue.
     * @param value Value to set for the frequencyInterval property.
     */
    public set frequencyInterval(value: SignInFrequencyInterval | undefined) {
        this._frequencyInterval = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationType": n => { this.authenticationType = n.getEnumValue<SignInFrequencyAuthenticationType>(SignInFrequencyAuthenticationType); },
            "frequencyInterval": n => { this.frequencyInterval = n.getEnumValue<SignInFrequencyInterval>(SignInFrequencyInterval); },
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
        writer.writeEnumValue<SignInFrequencyAuthenticationType>("authenticationType", this.authenticationType);
        writer.writeEnumValue<SignInFrequencyInterval>("frequencyInterval", this.frequencyInterval);
        writer.writeEnumValue<SigninFrequencyType>("type", this.type);
        writer.writeNumberValue("value", this.value);
    };
    /**
     * Gets the type property value. Possible values are: days, hours, or null if frequencyInterval is everyTime .
     * @returns a signinFrequencyType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Possible values are: days, hours, or null if frequencyInterval is everyTime .
     * @param value Value to set for the type property.
     */
    public set type(value: SigninFrequencyType | undefined) {
        this._type = value;
    };
    /**
     * Gets the value property value. The number of days or hours.
     * @returns a integer
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The number of days or hours.
     * @param value Value to set for the value property.
     */
    public set value(value: number | undefined) {
        this._value = value;
    };
}
