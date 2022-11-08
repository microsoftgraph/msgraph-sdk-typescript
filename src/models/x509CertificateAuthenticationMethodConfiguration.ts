import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue} from './createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue';
import {createX509CertificateUserBindingFromDiscriminatorValue} from './createX509CertificateUserBindingFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, AuthenticationMethodTarget, X509CertificateAuthenticationModeConfiguration, X509CertificateUserBinding} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class X509CertificateAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** Defines strong authentication configurations. This configuration includes the default authentication mode and the different rules for strong authentication bindings. */
    private _authenticationModeConfiguration?: X509CertificateAuthenticationModeConfiguration | undefined;
    /** Defines fields in the X.509 certificate that map to attributes of the Azure AD user object in order to bind the certificate to the user. The priority of the object determines the order in which the binding is carried out. The first binding that matches will be used and the rest ignored. */
    private _certificateUserBindings?: X509CertificateUserBinding[] | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. */
    private _includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * Gets the authenticationModeConfiguration property value. Defines strong authentication configurations. This configuration includes the default authentication mode and the different rules for strong authentication bindings.
     * @returns a x509CertificateAuthenticationModeConfiguration
     */
    public get authenticationModeConfiguration() {
        return this._authenticationModeConfiguration;
    };
    /**
     * Sets the authenticationModeConfiguration property value. Defines strong authentication configurations. This configuration includes the default authentication mode and the different rules for strong authentication bindings.
     * @param value Value to set for the authenticationModeConfiguration property.
     */
    public set authenticationModeConfiguration(value: X509CertificateAuthenticationModeConfiguration | undefined) {
        this._authenticationModeConfiguration = value;
    };
    /**
     * Gets the certificateUserBindings property value. Defines fields in the X.509 certificate that map to attributes of the Azure AD user object in order to bind the certificate to the user. The priority of the object determines the order in which the binding is carried out. The first binding that matches will be used and the rest ignored.
     * @returns a x509CertificateUserBinding
     */
    public get certificateUserBindings() {
        return this._certificateUserBindings;
    };
    /**
     * Sets the certificateUserBindings property value. Defines fields in the X.509 certificate that map to attributes of the Azure AD user object in order to bind the certificate to the user. The priority of the object determines the order in which the binding is carried out. The first binding that matches will be used and the rest ignored.
     * @param value Value to set for the certificateUserBindings property.
     */
    public set certificateUserBindings(value: X509CertificateUserBinding[] | undefined) {
        this._certificateUserBindings = value;
    };
    /**
     * Instantiates a new X509CertificateAuthenticationMethodConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.x509CertificateAuthenticationMethodConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationModeConfiguration": n => { this.authenticationModeConfiguration = n.getObjectValue<X509CertificateAuthenticationModeConfiguration>(createX509CertificateAuthenticationModeConfigurationFromDiscriminatorValue); },
            "certificateUserBindings": n => { this.certificateUserBindings = n.getCollectionOfObjectValues<X509CertificateUserBinding>(createX509CertificateUserBindingFromDiscriminatorValue); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<X509CertificateAuthenticationModeConfiguration>("authenticationModeConfiguration", this.authenticationModeConfiguration);
        writer.writeCollectionOfObjectValues<X509CertificateUserBinding>("certificateUserBindings", this.certificateUserBindings);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", this.includeTargets);
    };
}
