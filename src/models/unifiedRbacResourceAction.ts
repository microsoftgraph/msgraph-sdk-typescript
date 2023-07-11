import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceAction extends Entity, Parsable {
    /**
     * The actionVerb property
     */
    actionVerb?: string | undefined;
    /**
     * The authenticationContextId property
     */
    authenticationContextId?: string | undefined;
    /**
     * The description property
     */
    description?: string | undefined;
    /**
     * The isAuthenticationContextSettable property
     */
    isAuthenticationContextSettable?: boolean | undefined;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The resourceScopeId property
     */
    resourceScopeId?: string | undefined;
}
