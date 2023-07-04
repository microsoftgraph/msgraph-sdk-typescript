import {Group} from '../group';
import {DataSource} from './dataSource';
import {SourceType} from './sourceType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSource extends DataSource, Parsable {
    /**
     * The group property
     */
    group?: Group | undefined;
    /**
     * Specifies which sources are included in this group. Possible values are: mailbox, site.
     */
    includedSources?: SourceType | undefined;
}
