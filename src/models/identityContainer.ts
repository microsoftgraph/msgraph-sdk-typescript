import {B2xIdentityUserFlow} from './b2xIdentityUserFlow';
import {ConditionalAccessRoot} from './conditionalAccessRoot';
import {Entity} from './entity';
import {IdentityApiConnector} from './identityApiConnector';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {Parsable} from '@microsoft/kiota-abstractions';

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
