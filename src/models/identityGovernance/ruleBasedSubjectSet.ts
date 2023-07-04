import {SubjectSet} from '../subjectSet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RuleBasedSubjectSet extends Parsable, SubjectSet {
    /**
     * The rule for the subject set. Lifecycle Workflows supports a rich set of user properties for configuring the rules using $filter query expressions. For more information, see supported user and query parameters.
     */
    rule?: string | undefined;
}
