import {DataSourceContainer} from './dataSourceContainer';
import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {SiteSource} from './siteSource';
import {UnifiedGroupSource} from './unifiedGroupSource';
import {UserSource} from './userSource';
import {Parsable} from '@microsoft/kiota-abstractions';

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
