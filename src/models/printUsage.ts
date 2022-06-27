import {Entity} from './entity';
import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsage extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The completedBlackAndWhiteJobCount property */
    completedBlackAndWhiteJobCount?: number | undefined;
    /** The completedColorJobCount property */
    completedColorJobCount?: number | undefined;
    /** The incompleteJobCount property */
    incompleteJobCount?: number | undefined;
    /** The usageDate property */
    usageDate?: DateOnly | undefined;
}
