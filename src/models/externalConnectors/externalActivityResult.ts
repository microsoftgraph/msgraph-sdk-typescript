import {PublicError} from '../publicError';
import {ExternalActivity} from './externalActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalActivityResult extends ExternalActivity, Parsable {
    /**
     * Error information that explains the failure to process an external activity.
     */
    errorEscaped?: PublicError | undefined;
}
