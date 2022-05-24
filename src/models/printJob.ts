import {Entity} from './entity';
import {PrintDocument} from './printDocument';
import {PrintJobConfiguration} from './printJobConfiguration';
import {PrintJobStatus} from './printJobStatus';
import {PrintTask} from './printTask';
import {UserIdentity} from './userIdentity';

export interface PrintJob extends Entity{
    /** The configuration property */
    configuration?:PrintJobConfiguration | undefined;
    /** Read-only. Nullable. */
    createdBy?:UserIdentity | undefined;
    /** The DateTimeOffset when the job was created. Read-only. */
    createdDateTime?:Date | undefined;
    /** Read-only. */
    documents?:PrintDocument[] | undefined;
    /** If true, document can be fetched by printer. */
    isFetchable?:boolean | undefined;
    /** Contains the source job URL, if the job has been redirected from another printer. */
    redirectedFrom?:string | undefined;
    /** Contains the destination job URL, if the job has been redirected to another printer. */
    redirectedTo?:string | undefined;
    /** The status property */
    status?:PrintJobStatus | undefined;
    /** A list of printTasks that were triggered by this print job. */
    tasks?:PrintTask[] | undefined;
}
