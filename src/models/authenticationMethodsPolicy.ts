import {createAuthenticationMethodConfigurationFromDiscriminatorValue} from './createAuthenticationMethodConfigurationFromDiscriminatorValue';
import {createRegistrationEnforcementFromDiscriminatorValue} from './createRegistrationEnforcementFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, Entity, RegistrationEnforcement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsPolicy extends Entity implements Parsable {
    /** Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy. */
    private _authenticationMethodConfigurations?: AuthenticationMethodConfiguration[] | undefined;
    /** A description of the policy. */
    private _description?: string | undefined;
    /** The name of the policy. */
    private _displayName?: string | undefined;
    /** The date and time of the last update to the policy. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The version of the policy in use. */
    private _policyVersion?: string | undefined;
    /** The reconfirmationInDays property */
    private _reconfirmationInDays?: number | undefined;
    /** Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods. */
    private _registrationEnforcement?: RegistrationEnforcement | undefined;
    /**
     * Gets the authenticationMethodConfigurations property value. Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
     * @returns a authenticationMethodConfiguration
     */
    public get authenticationMethodConfigurations() {
        return this._authenticationMethodConfigurations;
    };
    /**
     * Sets the authenticationMethodConfigurations property value. Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.
     * @param value Value to set for the authenticationMethodConfigurations property.
     */
    public set authenticationMethodConfigurations(value: AuthenticationMethodConfiguration[] | undefined) {
        this._authenticationMethodConfigurations = value;
    };
    /**
     * Instantiates a new AuthenticationMethodsPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.authenticationMethodsPolicy";
    };
    /**
     * Gets the description property value. A description of the policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A description of the policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The name of the policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationMethodConfigurations": n => { this.authenticationMethodConfigurations = n.getCollectionOfObjectValues<AuthenticationMethodConfiguration>(createAuthenticationMethodConfigurationFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "policyVersion": n => { this.policyVersion = n.getStringValue(); },
            "reconfirmationInDays": n => { this.reconfirmationInDays = n.getNumberValue(); },
            "registrationEnforcement": n => { this.registrationEnforcement = n.getObjectValue<RegistrationEnforcement>(createRegistrationEnforcementFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time of the last update to the policy.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time of the last update to the policy.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the policyVersion property value. The version of the policy in use.
     * @returns a string
     */
    public get policyVersion() {
        return this._policyVersion;
    };
    /**
     * Sets the policyVersion property value. The version of the policy in use.
     * @param value Value to set for the policyVersion property.
     */
    public set policyVersion(value: string | undefined) {
        this._policyVersion = value;
    };
    /**
     * Gets the reconfirmationInDays property value. The reconfirmationInDays property
     * @returns a integer
     */
    public get reconfirmationInDays() {
        return this._reconfirmationInDays;
    };
    /**
     * Sets the reconfirmationInDays property value. The reconfirmationInDays property
     * @param value Value to set for the reconfirmationInDays property.
     */
    public set reconfirmationInDays(value: number | undefined) {
        this._reconfirmationInDays = value;
    };
    /**
     * Gets the registrationEnforcement property value. Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.
     * @returns a registrationEnforcement
     */
    public get registrationEnforcement() {
        return this._registrationEnforcement;
    };
    /**
     * Sets the registrationEnforcement property value. Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods.
     * @param value Value to set for the registrationEnforcement property.
     */
    public set registrationEnforcement(value: RegistrationEnforcement | undefined) {
        this._registrationEnforcement = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfiguration>("authenticationMethodConfigurations", this.authenticationMethodConfigurations);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("policyVersion", this.policyVersion);
        writer.writeNumberValue("reconfirmationInDays", this.reconfirmationInDays);
        writer.writeObjectValue<RegistrationEnforcement>("registrationEnforcement", this.registrationEnforcement);
    };
}
