import {Entity} from './entity';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LongRunningOperation extends Entity, Partial<Parsable> {
    /** The createdDateTime property */
    createdDateTime?: Date | undefined;
    /** The lastActionDateTime property */
    lastActionDateTime?: Date | undefined;
    /** The resourceLocation property */
    resourceLocation?: string | undefined;
    /** The status property */
    status?: LongRunningOperationStatus | undefined;
    /** The statusDetail property */
    statusDetail?: string | undefined;
}
