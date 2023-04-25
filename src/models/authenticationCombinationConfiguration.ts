import {AuthenticationMethodModes} from './authenticationMethodModes';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationCombinationConfiguration extends Entity implements Parsable {
    /** Which authentication method combinations this configuration applies to. Must be an allowedCombinations object that's defined for the authenticationStrengthPolicy. The only possible value for fido2combinationConfigurations is 'fido2'. */
    private _appliesToCombinations?: AuthenticationMethodModes[] | undefined;
    /**
     * Gets the appliesToCombinations property value. Which authentication method combinations this configuration applies to. Must be an allowedCombinations object that's defined for the authenticationStrengthPolicy. The only possible value for fido2combinationConfigurations is 'fido2'.
     * @returns a authenticationMethodModes
     */
    public get appliesToCombinations() {
        return this._appliesToCombinations;
    };
    /**
     * Sets the appliesToCombinations property value. Which authentication method combinations this configuration applies to. Must be an allowedCombinations object that's defined for the authenticationStrengthPolicy. The only possible value for fido2combinationConfigurations is 'fido2'.
     * @param value Value to set for the appliesToCombinations property.
     */
    public set appliesToCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._appliesToCombinations = value;
    };
    /**
     * Instantiates a new AuthenticationCombinationConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appliesToCombinations": n => { this.appliesToCombinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.appliesToCombinations && writer.writeEnumValue<AuthenticationMethodModes>("appliesToCombinations", ...this.appliesToCombinations);
    };
}
