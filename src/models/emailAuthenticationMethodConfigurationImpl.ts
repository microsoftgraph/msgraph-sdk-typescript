import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {EmailAuthenticationMethodConfiguration} from './emailAuthenticationMethodConfiguration';
import {ExternalEmailOtpState} from './externalEmailOtpState';
import {AuthenticationMethodConfigurationImpl, AuthenticationMethodTargetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmailAuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements EmailAuthenticationMethodConfiguration {
    /** Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled, disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email OTP enabled beginning in October 2021. */
    private _allowExternalIdToUseEmailOtp?: ExternalEmailOtpState | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. */
    private _includeTargets?: AuthenticationMethodTarget[] | undefined;
    /**
     * Gets the allowExternalIdToUseEmailOtp property value. Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled, disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email OTP enabled beginning in October 2021.
     * @returns a externalEmailOtpState
     */
    public get allowExternalIdToUseEmailOtp() {
        return this._allowExternalIdToUseEmailOtp;
    };
    /**
     * Sets the allowExternalIdToUseEmailOtp property value. Determines whether email OTP is usable by external users for authentication. Possible values are: default, enabled, disabled, unknownFutureValue. Tenants in the default state who did not use public preview will automatically have email OTP enabled beginning in October 2021.
     * @param value Value to set for the allowExternalIdToUseEmailOtp property.
     */
    public set allowExternalIdToUseEmailOtp(value: ExternalEmailOtpState | undefined) {
        if(value) {
            this._allowExternalIdToUseEmailOtp = value;
        }
    };
    /**
     * Instantiates a new EmailAuthenticationMethodConfiguration and sets the default values.
     * @param emailAuthenticationMethodConfigurationParameterValue 
     */
    public constructor(emailAuthenticationMethodConfigurationParameterValue?: EmailAuthenticationMethodConfiguration | undefined) {
        super(emailAuthenticationMethodConfigurationParameterValue);
        this._allowExternalIdToUseEmailOtp = emailAuthenticationMethodConfigurationParameterValue?.allowExternalIdToUseEmailOtp;
        this._includeTargets = emailAuthenticationMethodConfigurationParameterValue?.includeTargets;
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
     * Gets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @returns a AuthenticationMethodTargetInterface
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodTarget[] | undefined) {
        if(value) {
            const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = [];
            this.includeTargets?.forEach(element => {
                includeTargetsArrValue.push((element instanceof AuthenticationMethodTargetImpl? element as AuthenticationMethodTargetImpl:new AuthenticationMethodTargetImpl(element)));
            });
            this._includeTargets = includeTargetsArrValue;
        }
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
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = [];
        this.includeTargets?.forEach(element => {
            includeTargetsArrValue.push((element instanceof AuthenticationMethodTargetImpl? element as AuthenticationMethodTargetImpl:new AuthenticationMethodTargetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
    };
}
