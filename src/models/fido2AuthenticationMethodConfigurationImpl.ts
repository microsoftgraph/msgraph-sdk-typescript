import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {createFido2KeyRestrictionsFromDiscriminatorValue} from './createFido2KeyRestrictionsFromDiscriminatorValue';
import {Fido2AuthenticationMethodConfiguration} from './fido2AuthenticationMethodConfiguration';
import {Fido2KeyRestrictions} from './fido2KeyRestrictions';
import {AuthenticationMethodConfigurationImpl, AuthenticationMethodTargetImpl, Fido2KeyRestrictionsImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements Fido2AuthenticationMethodConfiguration {
    /** A collection of users or groups who are enabled to use the authentication method. */
    public includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** Determines whether attestation must be enforced for FIDO2 security key registration. */
    public isAttestationEnforced?: boolean | undefined;
    /** Determines if users can register new FIDO2 security keys. */
    public isSelfServiceRegistrationAllowed?: boolean | undefined;
    /** Controls whether key restrictions are enforced on FIDO2 security keys, either allowing or disallowing certain key types as defined by Authenticator Attestation GUID (AAGUID), an identifier that indicates the type (e.g. make and model) of the authenticator. */
    public keyRestrictions?: Fido2KeyRestrictions | undefined;
    /**
     * Instantiates a new Fido2AuthenticationMethodConfiguration and sets the default values.
     * @param fido2AuthenticationMethodConfigurationParameterValue 
     */
    public constructor(fido2AuthenticationMethodConfigurationParameterValue?: Fido2AuthenticationMethodConfiguration | undefined) {
        super(fido2AuthenticationMethodConfigurationParameterValue);
        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; fido2AuthenticationMethodConfigurationParameterValue?.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
        this.includeTargets = includeTargetsArrValue;
        this.isAttestationEnforced = fido2AuthenticationMethodConfigurationParameterValue?.isAttestationEnforced;
        this.isSelfServiceRegistrationAllowed = fido2AuthenticationMethodConfigurationParameterValue?.isSelfServiceRegistrationAllowed;
        this.keyRestrictions = fido2AuthenticationMethodConfigurationParameterValue?.keyRestrictions instanceof Fido2KeyRestrictionsImpl? fido2AuthenticationMethodConfigurationParameterValue?.keyRestrictions:new Fido2KeyRestrictionsImpl(fido2AuthenticationMethodConfigurationParameterValue?.keyRestrictions);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTargetImpl>(createAuthenticationMethodTargetFromDiscriminatorValue); },
            "isAttestationEnforced": n => { this.isAttestationEnforced = n.getBooleanValue(); },
            "isSelfServiceRegistrationAllowed": n => { this.isSelfServiceRegistrationAllowed = n.getBooleanValue(); },
            "keyRestrictions": n => { this.keyRestrictions = n.getObjectValue<Fido2KeyRestrictionsImpl>(createFido2KeyRestrictionsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
            writer.writeCollectionOfObjectValues<AuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
        if(this.isAttestationEnforced){
            writer.writeBooleanValue("isAttestationEnforced", this.isAttestationEnforced);
        }
        if(this.isSelfServiceRegistrationAllowed){
            writer.writeBooleanValue("isSelfServiceRegistrationAllowed", this.isSelfServiceRegistrationAllowed);
        }
        if(this.keyRestrictions){
            writer.writeObjectValue<Fido2KeyRestrictionsImpl>("keyRestrictions", new Fido2KeyRestrictionsImpl(this.keyRestrictions));
        }
    };
}
