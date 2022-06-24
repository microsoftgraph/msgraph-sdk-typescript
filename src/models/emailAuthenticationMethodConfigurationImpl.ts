import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {EmailAuthenticationMethodConfiguration} from './emailAuthenticationMethodConfiguration';
import {ExternalEmailOtpState} from './externalEmailOtpState';
import {AuthenticationMethodConfigurationImpl, AuthenticationMethodTargetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements EmailAuthenticationMethodConfiguration {
    /** Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled, disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email OTP enabled beginning in October 2021. */
    public allowExternalIdToUseEmailOtp?: ExternalEmailOtpState | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. */
    public includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * Instantiates a new EmailAuthenticationMethodConfiguration and sets the default values.
     * @param emailAuthenticationMethodConfigurationParameterValue 
     */
    public constructor(emailAuthenticationMethodConfigurationParameterValue?: EmailAuthenticationMethodConfiguration | undefined) {
        super(emailAuthenticationMethodConfigurationParameterValue);
        this.allowExternalIdToUseEmailOtp = emailAuthenticationMethodConfigurationParameterValue?.allowExternalIdToUseEmailOtp;
        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
        this.includeTargets = includeTargetsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowExternalIdToUseEmailOtp": n => { this.allowExternalIdToUseEmailOtp = n.getEnumValue<ExternalEmailOtpState>(ExternalEmailOtpState); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTargetImpl>(createAuthenticationMethodTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowExternalIdToUseEmailOtp){
            writer.writeEnumValue<ExternalEmailOtpState>("allowExternalIdToUseEmailOtp", this.allowExternalIdToUseEmailOtp);
        }
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
            writer.writeCollectionOfObjectValues<AuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
    };
}
