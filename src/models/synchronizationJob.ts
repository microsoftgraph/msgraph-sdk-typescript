import {Entity} from './entity';
import {KeyValuePair} from './keyValuePair';
import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationSchema} from './synchronizationSchema';
import {SynchronizationStatus} from './synchronizationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJob extends Entity, Parsable {
    /**
     * The schedule property
     */
    schedule?: SynchronizationSchedule | undefined;
    /**
     * The schema property
     */
    schema?: SynchronizationSchema | undefined;
    /**
     * The status property
     */
    status?: SynchronizationStatus | undefined;
    /**
     * The synchronizationJobSettings property
     */
    synchronizationJobSettings?: KeyValuePair[] | undefined;
    /**
     * The templateId property
     */
    templateId?: string | undefined;
}
