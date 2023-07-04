import {AccessPackageQuestion} from './accessPackageQuestion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageTextInputQuestion extends AccessPackageQuestion, Parsable {
    /**
     * Indicates whether the answer will be in single or multiple line format.
     */
    isSingleLineQuestion?: boolean | undefined;
    /**
     * The regular expression pattern which any answer to this question must match.
     */
    regexPattern?: string | undefined;
}
