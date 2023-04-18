import {AuthenticationMethodModes} from './authenticationMethodModes';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationCombinationConfiguration extends Entity implements Parsable {
    /** The appliesToCombinations property */
    private _appliesToCombinations?: AuthenticationMethodModes[] | undefined;
    /**
     * Gets the appliesToCombinations property value. The appliesToCombinations property
     * @returns a authenticationMethodModes
     */
    public get appliesToCombinations() {
        return this._appliesToCombinations;
    };
    /**
     * Sets the appliesToCombinations property value. The appliesToCombinations property
     * @param value Value to set for the appliesToCombinations property.
     */
    public set appliesToCombinations(value: AuthenticationMethodModes[] | undefined) {
        this._appliesToCombinations = value;
    };
    /**
     * Instantiates a new authenticationCombinationConfiguration and sets the default values.
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
