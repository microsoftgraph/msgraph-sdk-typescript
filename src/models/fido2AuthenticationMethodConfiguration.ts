import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {createFido2KeyRestrictionsFromDiscriminatorValue} from './createFido2KeyRestrictionsFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, AuthenticationMethodTarget, Fido2KeyRestrictions} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** A collection of users or groups who are enabled to use the authentication method. */
    private _includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** Determines whether attestation must be enforced for FIDO2 security key registration. */
    private _isAttestationEnforced?: boolean | undefined;
    /** Determines if users can register new FIDO2 security keys. */
    private _isSelfServiceRegistrationAllowed?: boolean | undefined;
    /** Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator. */
    private _keyRestrictions?: Fido2KeyRestrictions | undefined;
    /**
     * Instantiates a new Fido2AuthenticationMethodConfiguration and sets the default values.
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
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
            "isAttestationEnforced": n => { this.isAttestationEnforced = n.getBooleanValue(); },
            "isSelfServiceRegistrationAllowed": n => { this.isSelfServiceRegistrationAllowed = n.getBooleanValue(); },
            "keyRestrictions": n => { this.keyRestrictions = n.getObjectValue<Fido2KeyRestrictions>(createFido2KeyRestrictionsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @returns a authenticationMethodTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Gets the isAttestationEnforced property value. Determines whether attestation must be enforced for FIDO2 security key registration.
     * @returns a boolean
     */
    public get isAttestationEnforced() {
        return this._isAttestationEnforced;
    };
    /**
     * Sets the isAttestationEnforced property value. Determines whether attestation must be enforced for FIDO2 security key registration.
     * @param value Value to set for the isAttestationEnforced property.
     */
    public set isAttestationEnforced(value: boolean | undefined) {
        this._isAttestationEnforced = value;
    };
    /**
     * Gets the isSelfServiceRegistrationAllowed property value. Determines if users can register new FIDO2 security keys.
     * @returns a boolean
     */
    public get isSelfServiceRegistrationAllowed() {
        return this._isSelfServiceRegistrationAllowed;
    };
    /**
     * Sets the isSelfServiceRegistrationAllowed property value. Determines if users can register new FIDO2 security keys.
     * @param value Value to set for the isSelfServiceRegistrationAllowed property.
     */
    public set isSelfServiceRegistrationAllowed(value: boolean | undefined) {
        this._isSelfServiceRegistrationAllowed = value;
    };
    /**
     * Gets the keyRestrictions property value. Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @returns a fido2KeyRestrictions
     */
    public get keyRestrictions() {
        return this._keyRestrictions;
    };
    /**
     * Sets the keyRestrictions property value. Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator.
     * @param value Value to set for the keyRestrictions property.
     */
    public set keyRestrictions(value: Fido2KeyRestrictions | undefined) {
        this._keyRestrictions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", this.includeTargets);
        writer.writeBooleanValue("isAttestationEnforced", this.isAttestationEnforced);
        writer.writeBooleanValue("isSelfServiceRegistrationAllowed", this.isSelfServiceRegistrationAllowed);
        writer.writeObjectValue<Fido2KeyRestrictions>("keyRestrictions", this.keyRestrictions);
    };
}
