import {Prompt} from '../../../../../../models/prompt';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StartHoldMusicPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The clientContext property */
    clientContext?: string | undefined;
    /** The customPrompt property */
    customPrompt?: Prompt | undefined;
}
