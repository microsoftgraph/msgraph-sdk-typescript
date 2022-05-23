import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaign} from './authenticationMethodsRegistrationCampaign';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue';
import {createExcludeTargetFromDiscriminatorValue} from './createExcludeTargetFromDiscriminatorValue';
import {ExcludeTarget} from './excludeTarget';
import {AuthenticationMethodsRegistrationCampaignIncludeTargetImpl, ExcludeTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaignImpl implements AdditionalDataHolder, AuthenticationMethodsRegistrationCampaign, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Users and groups of users that are excluded from being prompted to set up the authentication method. */
    public excludeTargets?: ExcludeTarget[] | undefined;
    /** Users and groups of users that are prompted to set up the authentication method. */
    public includeTargets?: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum 0 days. Maximum: 14 days. If the value is '0' – The user is prompted during every MFA attempt. */
    public snoozeDurationInDays?: number | undefined;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled. */
    public state?: AdvancedConfigState | undefined;
    /**
     * Instantiates a new authenticationMethodsRegistrationCampaign and sets the default values.
     * @param authenticationMethodsRegistrationCampaignParameterValue 
     */
    public constructor(authenticationMethodsRegistrationCampaignParameterValue?: AuthenticationMethodsRegistrationCampaign | undefined) {
        this.additionalData = authenticationMethodsRegistrationCampaignParameterValue?.additionalData ? authenticationMethodsRegistrationCampaignParameterValue?.additionalData! : {}
        this.excludeTargets = authenticationMethodsRegistrationCampaignParameterValue?.excludeTargets ;
        this.includeTargets = authenticationMethodsRegistrationCampaignParameterValue?.includeTargets ;
        this.snoozeDurationInDays = authenticationMethodsRegistrationCampaignParameterValue?.snoozeDurationInDays ;
        this.state = authenticationMethodsRegistrationCampaignParameterValue?.state ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.excludeTargets && this.excludeTargets.length != 0){        const excludeTargetsArrValue: ExcludeTargetImpl[] = []; this.excludeTargets?.forEach(element => {excludeTargetsArrValue.push(new ExcludeTargetImpl(element));});
        writer.writeCollectionOfObjectValues<ExcludeTargetImpl>("excludeTargets", excludeTargetsArrValue);
        }
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodsRegistrationCampaignIncludeTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(new AuthenticationMethodsRegistrationCampaignIncludeTargetImpl(element));});
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
}
