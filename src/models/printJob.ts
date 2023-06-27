import {Entity} from './entity';
import {PrintDocument} from './printDocument';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintJobStatus} from './printJobStatus';
import {PrintTask} from './printTask';
import {UserIdentity} from './userIdentity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJob extends Entity, Parsable {
    /**
     * The configuration property
     */
    configuration?: PrintJobConfiguration | undefined;
    /**
     * The createdBy property
     */
    createdBy?: UserIdentity | undefined;
    /**
     * The DateTimeOffset when the job was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The documents property
     */
    documents?: PrintDocument[] | undefined;
    /**
     * If true, document can be fetched by printer.
     */
    isFetchable?: boolean | undefined;
    /**
     * Contains the source job URL, if the job has been redirected from another printer.
     */
    redirectedFrom?: string | undefined;
    /**
     * Contains the destination job URL, if the job has been redirected to another printer.
     */
    redirectedTo?: string | undefined;
    /**
     * The status property
     */
    status?: PrintJobStatus | undefined;
    /**
     * A list of printTasks that were triggered by this print job.
     */
    tasks?: PrintTask[] | undefined;
}
