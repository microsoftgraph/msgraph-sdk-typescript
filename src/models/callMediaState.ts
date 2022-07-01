import {MediaState} from './mediaState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallMediaState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The audio media state. Possible values are: active, inactive, unknownFutureValue. */
    audio?: MediaState | undefined;
}
