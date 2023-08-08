import type {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import type {ConditionalAccessRoot} from './conditionalAccessRoot';
import type {Entity} from './entity';
import type {IdentityApiConnector} from './identityApiConnector';
import type {IdentityProviderBase} from './identityProviderBase';
import type {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityContainer extends Entity, Parsable {
    /**
     * Represents entry point for API connectors.
     */
    apiConnectors?: IdentityApiConnector[] | undefined;
    /**
     * Represents entry point for B2X/self-service sign-up identity userflows.
     */
    b2xUserFlows?: B2xIdentityUserFlow[] | undefined;
    /**
     * the entry point for the Conditional Access (CA) object model.
     */
    conditionalAccess?: ConditionalAccessRoot | undefined;
    /**
     * The identityProviders property
     */
    identityProviders?: IdentityProviderBase[] | undefined;
    /**
     * Represents entry point for identity userflow attributes.
     */
    userFlowAttributes?: IdentityUserFlowAttribute[] | undefined;
}
