import {Entity} from './entity';
import {InferenceClassificationOverride} from './inferenceClassificationOverride';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassification extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable. */
    overrides?: InferenceClassificationOverride[] | undefined;
}
