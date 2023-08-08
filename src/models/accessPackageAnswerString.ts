import type {AccessPackageAnswer} from './accessPackageAnswer';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAnswerString extends AccessPackageAnswer, Parsable {
    /**
     * The value stored on the requestor's user profile, if this answer is configured to be stored as a specific attribute.
     */
    value?: string | undefined;
}
