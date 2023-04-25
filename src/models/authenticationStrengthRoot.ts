import {AuthenticationMethodModes} from './authenticationMethodModes';
import {createAuthenticationMethodModeDetailFromDiscriminatorValue} from './createAuthenticationMethodModeDetailFromDiscriminatorValue';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from './createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {AuthenticationMethodModeDetail, AuthenticationStrengthPolicy, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationStrengthRoot extends Entity implements Parsable {
    /** Names and descriptions of all valid authentication method modes in the system. */
    private _authenticationMethodModes?: AuthenticationMethodModeDetail[] | undefined;
    /** The combinations property */
    private _combinations?: AuthenticationMethodModes[] | undefined;
    /** A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies. */
    private _policies?: AuthenticationStrengthPolicy[] | undefined;
    /**
     * Gets the authenticationMethodModes property value. Names and descriptions of all valid authentication method modes in the system.
     * @returns a authenticationMethodModeDetail
     */
    public get authenticationMethodModes() {
        return this._authenticationMethodModes;
    };
    /**
     * Sets the authenticationMethodModes property value. Names and descriptions of all valid authentication method modes in the system.
     * @param value Value to set for the authenticationMethodModes property.
     */
    public set authenticationMethodModes(value: AuthenticationMethodModeDetail[] | undefined) {
        this._authenticationMethodModes = value;
    };
    /**
     * Gets the combinations property value. The combinations property
     * @returns a authenticationMethodModes
     */
    public get combinations() {
        return this._combinations;
    };
    /**
     * Sets the combinations property value. The combinations property
     * @param value Value to set for the combinations property.
     */
    public set combinations(value: AuthenticationMethodModes[] | undefined) {
        this._combinations = value;
    };
    /**
     * Instantiates a new AuthenticationStrengthRoot and sets the default values.
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
            "authenticationMethodModes": n => { this.authenticationMethodModes = n.getCollectionOfObjectValues<AuthenticationMethodModeDetail>(createAuthenticationMethodModeDetailFromDiscriminatorValue); },
            "combinations": n => { this.combinations = n.getEnumValues<AuthenticationMethodModes>(AuthenticationMethodModes); },
            "policies": n => { this.policies = n.getCollectionOfObjectValues<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the policies property value. A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @returns a authenticationStrengthPolicy
     */
    public get policies() {
        return this._policies;
    };
    /**
     * Sets the policies property value. A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @param value Value to set for the policies property.
     */
    public set policies(value: AuthenticationStrengthPolicy[] | undefined) {
        this._policies = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodModeDetail>("authenticationMethodModes", this.authenticationMethodModes);
        this.combinations && writer.writeEnumValue<AuthenticationMethodModes>("combinations", ...this.combinations);
        writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("policies", this.policies);
    };
}
