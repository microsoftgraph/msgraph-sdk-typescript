import {AppIdentity} from './appIdentity';
import {Entity} from './entity';
import {PrintTask} from './printTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinition extends Entity, Parsable {
    /**
     * The createdBy property
     */
    createdBy?: AppIdentity | undefined;
    /**
     * The name of the printTaskDefinition.
     */
    displayName?: string | undefined;
    /**
     * A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only.
     */
    tasks?: PrintTask[] | undefined;
}
