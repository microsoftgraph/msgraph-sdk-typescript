import {AccessPackageLocalizedText} from './accessPackageLocalizedText';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageQuestion extends Entity, Parsable {
    /**
     * Specifies whether the requestor is allowed to edit answers to questions for an assignment by posting an update to accessPackageAssignmentRequest.
     */
    isAnswerEditable?: boolean | undefined;
    /**
     * Whether the requestor is required to supply an answer or not.
     */
    isRequired?: boolean | undefined;
    /**
     * The text of the question represented in a format for a specific locale.
     */
    localizations?: AccessPackageLocalizedText[] | undefined;
    /**
     * Relative position of this question when displaying a list of questions to the requestor.
     */
    sequence?: number | undefined;
    /**
     * The text of the question to show to the requestor.
     */
    text?: string | undefined;
}
