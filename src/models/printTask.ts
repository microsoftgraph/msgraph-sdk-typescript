import {Entity} from './entity';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskStatus} from './printTaskStatus';
import {PrintTaskTrigger} from './printTaskTrigger';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTask extends Entity, Parsable {
    /**
     * The definition property
     */
    definition?: PrintTaskDefinition | undefined;
    /**
     * The URL for the print entity that triggered this task. For example, https://graph.microsoft.com/v1.0/print/printers/{printerId}/jobs/{jobId}. Read-only.
     */
    parentUrl?: string | undefined;
    /**
     * The status property
     */
    status?: PrintTaskStatus | undefined;
    /**
     * The trigger property
     */
    trigger?: PrintTaskTrigger | undefined;
}
