import {WorkflowBase} from './workflowBase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkflowVersion extends Parsable, WorkflowBase {
    /**
     * The version of the workflow.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    versionNumber?: number | undefined;
}
