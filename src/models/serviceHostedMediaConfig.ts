import {MediaConfig} from './mediaConfig';
import {MediaInfo} from './mediaInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHostedMediaConfig extends Partial<AdditionalDataHolder>, MediaConfig, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of media to pre-fetch. */
    preFetchMedia?: MediaInfo[] | undefined;
}
