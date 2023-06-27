import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSource extends Entity, Parsable {
    /**
     * The user who created the dataSource.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The date and time the dataSource was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * The display name of the dataSource. This will be the name of the SharePoint site.
     */
    displayName?: string | undefined;
    /**
     * The hold status of the dataSource.The possible values are: notApplied, applied, applying, removing, partial
     */
    holdStatus?: DataSourceHoldStatus | undefined;
}
