import type {DataSourceContainer} from './dataSourceContainer';
import type {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import type {SiteSource} from './siteSource';
import type {UnifiedGroupSource} from './unifiedGroupSource';
import type {UserSource} from './userSource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodian extends DataSourceContainer, Parsable {
    /**
     * Date and time the custodian acknowledged a hold notification.
     */
    acknowledgedDateTime?: Date | undefined;
    /**
     * Email address of the custodian.
     */
    email?: string | undefined;
    /**
     * Operation entity that represents the latest indexing for the custodian.
     */
    lastIndexOperation?: EdiscoveryIndexOperation | undefined;
    /**
     * Data source entity for SharePoint sites associated with the custodian.
     */
    siteSources?: SiteSource[] | undefined;
    /**
     * Data source entity for groups associated with the custodian.
     */
    unifiedGroupSources?: UnifiedGroupSource[] | undefined;
    /**
     * Data source entity for a the custodian. This is the container for a custodian's mailbox and OneDrive for Business site.
     */
    userSources?: UserSource[] | undefined;
}
