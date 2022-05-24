import {Entity} from './entity';
import {DateOnly} from '@microsoft/kiota-abstractions';

export interface PrintUsage extends Entity{
    /** The completedBlackAndWhiteJobCount property */
    completedBlackAndWhiteJobCount?:number | undefined;
    /** The completedColorJobCount property */
    completedColorJobCount?:number | undefined;
    /** The incompleteJobCount property */
    incompleteJobCount?:number | undefined;
    /** The usageDate property */
    usageDate?:DateOnly | undefined;
}
