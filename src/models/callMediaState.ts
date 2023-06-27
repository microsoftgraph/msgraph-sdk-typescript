import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallMediaState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The audio media state. Possible values are: active, inactive, unknownFutureValue.
     */
    audio?: MediaState | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
