import type {PublicError} from '../publicError';
import type {ExternalActivity} from './externalActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalActivityResult extends ExternalActivity, Parsable {
    /**
     * Error information that explains the failure to process an external activity.
     */
    errorEscaped?: PublicError | undefined;
}
