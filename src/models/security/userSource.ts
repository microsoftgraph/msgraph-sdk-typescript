import {DataSource} from './dataSource';
import {SourceType} from './sourceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSource extends DataSource, Parsable {
    /**
     * Email address of the user's mailbox.
     */
    email?: string | undefined;
    /**
     * Specifies which sources are included in this group. Possible values are: mailbox, site.
     */
    includedSources?: SourceType | undefined;
    /**
     * The URL of the user's OneDrive for Business site. Read-only.
     */
    siteWebUrl?: string | undefined;
}
