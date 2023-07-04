import {PublicError} from '../publicError';
import {EventStatusType} from './eventStatusType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RetentionEventStatus extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error if the status is not successful.
     */
    errorEscaped?: PublicError | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The status of the distribution. The possible values are: pending, error, success, notAvaliable.
     */
    status?: EventStatusType | undefined;
}
