import { type AppIdentity } from './appIdentity';
import { type Entity } from './entity';
import { type PrintTask } from './printTask';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
