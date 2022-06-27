import {EmailAddress} from './emailAddress';
import {Entity} from './entity';
import {InferenceClassificationType} from './inferenceClassificationType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InferenceClassificationOverride extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other. */
    classifyAs?: InferenceClassificationType | undefined;
    /** The email address information of the sender for whom the override is created. */
    senderEmailAddress?: EmailAddress | undefined;
}
