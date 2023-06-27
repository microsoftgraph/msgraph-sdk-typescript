import {Entity} from './entity';
import {IncompleteData} from './incompleteData';
import {ItemActionStat} from './itemActionStat';
import {ItemActivity} from './itemActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityStat extends Entity, Parsable {
    /**
     * Statistics about the access actions in this interval. Read-only.
     */
    access?: ItemActionStat | undefined;
    /**
     * Exposes the itemActivities represented in this itemActivityStat resource.
     */
    activities?: ItemActivity[] | undefined;
    /**
     * Statistics about the create actions in this interval. Read-only.
     */
    create?: ItemActionStat | undefined;
    /**
     * Statistics about the delete actions in this interval. Read-only.
     */
    delete?: ItemActionStat | undefined;
    /**
     * Statistics about the edit actions in this interval. Read-only.
     */
    edit?: ItemActionStat | undefined;
    /**
     * When the interval ends. Read-only.
     */
    endDateTime?: Date | undefined;
    /**
     * Indicates that the statistics in this interval are based on incomplete data. Read-only.
     */
    incompleteData?: IncompleteData | undefined;
    /**
     * Indicates whether the item is 'trending.' Read-only.
     */
    isTrending?: boolean | undefined;
    /**
     * Statistics about the move actions in this interval. Read-only.
     */
    move?: ItemActionStat | undefined;
    /**
     * When the interval starts. Read-only.
     */
    startDateTime?: Date | undefined;
}
