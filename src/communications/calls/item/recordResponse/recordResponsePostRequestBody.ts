import { type Prompt } from '../../../../models/prompt';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface RecordResponsePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The bargeInAllowed property
     */
    bargeInAllowed?: boolean | undefined;
    /**
     * The clientContext property
     */
    clientContext?: string | undefined;
    /**
     * The initialSilenceTimeoutInSeconds property
     */
    initialSilenceTimeoutInSeconds?: number | undefined;
    /**
     * The maxRecordDurationInSeconds property
     */
    maxRecordDurationInSeconds?: number | undefined;
    /**
     * The maxSilenceTimeoutInSeconds property
     */
    maxSilenceTimeoutInSeconds?: number | undefined;
    /**
     * The playBeep property
     */
    playBeep?: boolean | undefined;
    /**
     * The prompts property
     */
    prompts?: Prompt[] | undefined;
    /**
     * The stopTones property
     */
    stopTones?: string[] | undefined;
}
