import { type SubjectSet } from './subjectSet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TargetManager extends Parsable, SubjectSet {
    /**
     * Manager level, between 1 and 4. The direct manager is 1.
     */
    managerLevel?: number | undefined;
}
