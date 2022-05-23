import {AdvancedConfigState} from './advancedConfigState';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget} from './authenticationMethodsRegistrationCampaignIncludeTarget';
import {ExcludeTarget} from './excludeTarget';

export interface AuthenticationMethodsRegistrationCampaign{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Users and groups of users that are excluded from being prompted to set up the authentication method. */
    excludeTargets?:ExcludeTarget[] | undefined;
    /** Users and groups of users that are prompted to set up the authentication method. */
    includeTargets?:AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /** Specifies the number of days that the user sees a prompt again if they select 'Not now' and snoozes the prompt. Minimum 0 days. Maximum: 14 days. If the value is '0' – The user is prompted during every MFA attempt. */
    snoozeDurationInDays?:number | undefined;
    /** Enable or disable the feature. Possible values are: default, enabled, disabled, unknownFutureValue. The default value is used when the configuration hasn't been explicitly set and uses the default behavior of Azure AD for the setting. The default value is disabled. */
    state?:AdvancedConfigState | undefined;
}
