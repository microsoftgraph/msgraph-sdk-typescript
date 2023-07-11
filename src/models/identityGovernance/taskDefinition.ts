import {Entity} from '../entity';
import {LifecycleTaskCategory} from './lifecycleTaskCategory';
import {Parameter} from './parameter';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskDefinition extends Entity, Parsable {
    /**
     * The category property
     */
    category?: LifecycleTaskCategory | undefined;
    /**
     * The continueOnError property
     */
    continueOnError?: boolean | undefined;
    /**
     * The description of the taskDefinition.
     */
    description?: string | undefined;
    /**
     * The display name of the taskDefinition.Supports $filter(eq, ne) and $orderby.
     */
    displayName?: string | undefined;
    /**
     * The parameters that must be supplied when creating a workflow task object.Supports $filter(any).
     */
    parameters?: Parameter[] | undefined;
    /**
     * The version number of the taskDefinition. New records are pushed when we add support for new parameters.Supports $filter(ge, gt, le, lt, eq, ne) and $orderby.
     */
    version?: number | undefined;
}
