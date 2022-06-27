import {AppIdentity} from './appIdentity';
import {Entity} from './entity';
import {PrintTask} from './printTask';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinition extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The createdBy property */
    createdBy?: AppIdentity | undefined;
    /** The name of the printTaskDefinition. */
    displayName?: string | undefined;
    /** A list of tasks that have been created based on this definition. The list includes currently running tasks and recently completed tasks. Read-only. */
    tasks?: PrintTask[] | undefined;
}
