import {MediaInfo} from './mediaInfo';
import {Prompt} from './prompt';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaPrompt extends Partial<AdditionalDataHolder>, Partial<Parsable>, Prompt {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The mediaInfo property */
    mediaInfo?: MediaInfo | undefined;
}
