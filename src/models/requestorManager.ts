import {SubjectSet} from './subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RequestorManager extends Parsable, SubjectSet {
    /**
     * The hierarchical level of the manager with respect to the requestor. For example, the direct manager of a requestor would have a managerLevel of 1, while the manager of the requestor's manager would have a managerLevel of 2. Default value for managerLevel is 1. Possible values for this property range from 1 to 2.
     */
    managerLevel?: number | undefined;
}
