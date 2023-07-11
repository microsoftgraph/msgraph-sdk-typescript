import {Entity} from './entity';
import {UnifiedRbacResourceAction} from './unifiedRbacResourceAction';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRbacResourceNamespace extends Entity, Parsable {
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The resourceActions property
     */
    resourceActions?: UnifiedRbacResourceAction[] | undefined;
}
