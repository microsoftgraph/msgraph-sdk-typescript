import {WorkflowExecutionTrigger} from './workflowExecutionTrigger';
import {WorkflowTriggerTimeBasedAttribute} from './workflowTriggerTimeBasedAttribute';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeBasedAttributeTrigger extends Parsable, WorkflowExecutionTrigger {
    /**
     * How many days before or after the time-based attribute specified the workflow should trigger. For example, if the attribute is employeeHireDate and offsetInDays is -1, then the workflow should trigger one day before the employee hire date. The value can range between -180 and 180 days.
     */
    offsetInDays?: number | undefined;
    /**
     * The timeBasedAttribute property
     */
    timeBasedAttribute?: WorkflowTriggerTimeBasedAttribute | undefined;
}
