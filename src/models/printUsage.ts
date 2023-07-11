import {Entity} from './entity';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsage extends Entity, Parsable {
    /**
     * The blackAndWhitePageCount property
     */
    blackAndWhitePageCount?: number | undefined;
    /**
     * The colorPageCount property
     */
    colorPageCount?: number | undefined;
    /**
     * The completedBlackAndWhiteJobCount property
     */
    completedBlackAndWhiteJobCount?: number | undefined;
    /**
     * The completedColorJobCount property
     */
    completedColorJobCount?: number | undefined;
    /**
     * The completedJobCount property
     */
    completedJobCount?: number | undefined;
    /**
     * The doubleSidedSheetCount property
     */
    doubleSidedSheetCount?: number | undefined;
    /**
     * The incompleteJobCount property
     */
    incompleteJobCount?: number | undefined;
    /**
     * The mediaSheetCount property
     */
    mediaSheetCount?: number | undefined;
    /**
     * The pageCount property
     */
    pageCount?: number | undefined;
    /**
     * The singleSidedSheetCount property
     */
    singleSidedSheetCount?: number | undefined;
    /**
     * The usageDate property
     */
    usageDate?: DateOnly | undefined;
}
