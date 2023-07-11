import {IdentityProvider} from './identityProvider';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlow} from './identityUserFlow';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {UserFlowApiConnectorConfiguration} from './userFlowApiConnectorConfiguration';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface B2xIdentityUserFlow extends IdentityUserFlow, Parsable {
    /**
     * Configuration for enabling an API connector for use as part of the self-service sign-up user flow. You can only obtain the value of this object using Get userFlowApiConnectorConfiguration.
     */
    apiConnectorConfiguration?: UserFlowApiConnectorConfiguration | undefined;
    /**
     * The identity providers included in the user flow.
     */
    identityProviders?: IdentityProvider[] | undefined;
    /**
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     */
    languages?: UserFlowLanguageConfiguration[] | undefined;
    /**
     * The user attribute assignments included in the user flow.
     */
    userAttributeAssignments?: IdentityUserFlowAttributeAssignment[] | undefined;
    /**
     * The userFlowIdentityProviders property
     */
    userFlowIdentityProviders?: IdentityProviderBase[] | undefined;
}
