import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {ResultInfo} from './resultInfo';

export interface CommsOperation extends Entity{
    /** Unique Client Context string. Max limit is 256 chars. */
    clientContext?:string | undefined;
    /** The result information. Read-only. */
    resultInfo?:ResultInfo | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    status?:OperationStatus | undefined;
}
