import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue';
import {createExcludeTargetFromDiscriminatorValue} from './createExcludeTargetFromDiscriminatorValue';
import {ExcludeTarget} from './excludeTarget';
import {AuthenticationMethodsRegistrationCampaignIncludeTargetImpl, ExcludeTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaignImpl implements AuthenticationMethodsRegistrationCampaign {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Users and groups of users that are excluded from being prompted to set up the authentication method. */
    private _excludeTargets?: ExcludeTarget[] | undefined;
    /** Users and groups of users that are prompted to set up the authentication method. */
    private _includeTargets?: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum 0 days. Maximum: 14 days. If the value is '0' – The user is prompted during every MFA attempt. */
    private _snoozeDurationInDays?: number | undefined;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled. */
    private _state?: AdvancedConfigState | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new authenticationMethodsRegistrationCampaign and sets the default values.
     * @param authenticationMethodsRegistrationCampaignParameterValue 
     */
    public constructor(authenticationMethodsRegistrationCampaignParameterValue?: AuthenticationMethodsRegistrationCampaign | undefined) {
        this._additionalData = authenticationMethodsRegistrationCampaignParameterValue?.additionalData ? authenticationMethodsRegistrationCampaignParameterValue?.additionalData! : {};
        this._excludeTargets = authenticationMethodsRegistrationCampaignParameterValue?.excludeTargets;
        this._includeTargets = authenticationMethodsRegistrationCampaignParameterValue?.includeTargets;
        this._snoozeDurationInDays = authenticationMethodsRegistrationCampaignParameterValue?.snoozeDurationInDays;
        this._state = authenticationMethodsRegistrationCampaignParameterValue?.state;
    };
    /**
     * Gets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @returns a ExcludeTargetInterface
     */
    public get excludeTargets() {
        return this._excludeTargets;
    };
    /**
     * Sets the excludeTargets property value. Users and groups of users that are excluded from being prompted to set up the authentication method.
     * @param value Value to set for the excludeTargets property.
     */
    public set excludeTargets(value: ExcludeTarget[] | undefined) {
        if(value) {
            const excludeTargetsArrValue: ExcludeTargetImpl[] = [];
            this.excludeTargets?.forEach(element => {
                excludeTargetsArrValue.push((element instanceof ExcludeTargetImpl? element as ExcludeTargetImpl:new ExcludeTargetImpl(element)));
            });
            this._excludeTargets = excludeTargetsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeTargets": n => { this.excludeTargets = n.getCollectionOfObjectValues<ExcludeTargetImpl>(createExcludeTargetFromDiscriminatorValue); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTargetImpl>(createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue); },
            "snoozeDurationInDays": n => { this.snoozeDurationInDays = n.getNumberValue(); },
            "state": n => { this.state = n.getEnumValue<AdvancedConfigState>(AdvancedConfigState); },
        };
    };
    /**
     * Gets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @returns a AuthenticationMethodsRegistrationCampaignIncludeTargetInterface
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. Users and groups of users that are prompted to set up the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined) {
        if(value) {
            const includeTargetsArrValue: AuthenticationMethodsRegistrationCampaignIncludeTargetImpl[] = [];
            this.includeTargets?.forEach(element => {
                includeTargetsArrValue.push((element instanceof AuthenticationMethodsRegistrationCampaignIncludeTargetImpl? element as AuthenticationMethodsRegistrationCampaignIncludeTargetImpl:new AuthenticationMethodsRegistrationCampaignIncludeTargetImpl(element)));
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
        if(this.excludeTargets && this.excludeTargets.length != 0){        const excludeTargetsArrValue: ExcludeTargetImpl[] = [];
        this.excludeTargets?.forEach(element => {
            excludeTargetsArrValue.push((element instanceof ExcludeTargetImpl? element as ExcludeTargetImpl:new ExcludeTargetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExcludeTargetImpl>("excludeTargets", excludeTargetsArrValue);
        }
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodsRegistrationCampaignIncludeTargetImpl[] = [];
        this.includeTargets?.forEach(element => {
            includeTargetsArrValue.push((element instanceof AuthenticationMethodsRegistrationCampaignIncludeTargetImpl? element as AuthenticationMethodsRegistrationCampaignIncludeTargetImpl:new AuthenticationMethodsRegistrationCampaignIncludeTargetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTargetImpl>("includeTargets", includeTargetsArrValue);
        }
        if(this.snoozeDurationInDays){
            writer.writeNumberValue("snoozeDurationInDays", this.snoozeDurationInDays);
        }
        if(this.state){
            writer.writeEnumValue<AdvancedConfigState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum 0 days. Maximum: 14 days. If the value is '0' – The user is prompted during every MFA attempt.
     * @returns a integer
     */
    public get snoozeDurationInDays() {
        return this._snoozeDurationInDays;
    };
    /**
     * Sets the snoozeDurationInDays property value. Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum 0 days. Maximum: 14 days. If the value is '0' – The user is prompted during every MFA attempt.
     * @param value Value to set for the snoozeDurationInDays property.
     */
    public set snoozeDurationInDays(value: number | undefined) {
        if(value) {
            this._snoozeDurationInDays = value;
        }
    };
    /**
     * Gets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled.
     * @returns a advancedConfigState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled.
     * @param value Value to set for the state property.
     */
    public set state(value: AdvancedConfigState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
