import {Entity} from './entity';
import {KeyValuePair} from './keyValuePair';
import {SynchronizationSchedule} from './synchronizationSchedule';
import {SynchronizationSchema} from './synchronizationSchema';
import {SynchronizationStatus} from './synchronizationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJob extends Entity, Parsable {
    /**
     * Schedule used to run the job. Read-only.
     */
    schedule?: SynchronizationSchedule | undefined;
    /**
     * The synchronization schema configured for the job.
     */
    schema?: SynchronizationSchema | undefined;
    /**
     * Status of the job, which includes when the job was last run, current job state, and errors.
     */
    status?: SynchronizationStatus | undefined;
    /**
     * Settings associated with the job. Some settings are inherited from the template.
     */
    synchronizationJobSettings?: KeyValuePair[] | undefined;
    /**
     * Identifier of the synchronization template this job is based on.
     */
    templateId?: string | undefined;
}
