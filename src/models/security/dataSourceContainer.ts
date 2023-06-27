import {Entity} from '../entity';
import {DataSourceContainerStatus} from './dataSourceContainerStatus';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSourceContainer extends Entity, Parsable {
    /**
     * Created date and time of the dataSourceContainer entity.
     */
    createdDateTime?: Date | undefined;
    /**
     * Display name of the dataSourceContainer entity.
     */
    displayName?: string | undefined;
    /**
     * The hold status of the dataSourceContainer. The possible values are: notApplied, applied, applying, removing, partial
     */
    holdStatus?: DataSourceHoldStatus | undefined;
    /**
     * Last modified date and time of the dataSourceContainer.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Date and time that the dataSourceContainer was released from the case.
     */
    releasedDateTime?: Date | undefined;
    /**
     * Latest status of the dataSourceContainer. Possible values are: Active, Released.
     */
    status?: DataSourceContainerStatus | undefined;
}
