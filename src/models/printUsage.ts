import {Entity} from './entity';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsage extends Entity, Parsable {
    /**
     * The completedBlackAndWhiteJobCount property
     */
    completedBlackAndWhiteJobCount?: number | undefined;
    /**
     * The completedColorJobCount property
     */
    completedColorJobCount?: number | undefined;
    /**
     * The incompleteJobCount property
     */
    incompleteJobCount?: number | undefined;
    /**
     * The usageDate property
     */
    usageDate?: DateOnly | undefined;
}
