import {IncomingCallOptions} from '../../../../models/incomingCallOptions';
import {MediaConfig} from '../../../../models/mediaConfig';
import {Modality} from '../../../../models/modality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AnswerPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * The acceptedModalities property
     */
    acceptedModalities?: Modality[] | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The callbackUri property
     */
    callbackUri?: string | undefined;
    /**
     * The callOptions property
     */
    callOptions?: IncomingCallOptions | undefined;
    /**
     * The mediaConfig property
     */
    mediaConfig?: MediaConfig | undefined;
    /**
     * The participantCapacity property
     */
    participantCapacity?: number | undefined;
}
