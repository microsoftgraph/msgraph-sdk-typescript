import {TeamworkHostedContent} from './teamworkHostedContent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageHostedContent extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeamworkHostedContent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
