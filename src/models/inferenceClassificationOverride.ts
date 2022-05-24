import {EmailAddress} from './emailAddress';
import {Entity} from './entity';
import {InferenceClassificationType} from './inferenceClassificationType';

export interface InferenceClassificationOverride extends Entity{
    /** Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other. */
    classifyAs?:InferenceClassificationType | undefined;
    /** The email address information of the sender for whom the override is created. */
    senderEmailAddress?:EmailAddress | undefined;
}
