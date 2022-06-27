import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LinkedResource extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Field indicating the app name of the source that is sending the linkedResource. */
    applicationName?: string | undefined;
    /** Field indicating the title of the linkedResource. */
    displayName?: string | undefined;
    /** Id of the object that is associated with this task on the third-party/partner system. */
    externalId?: string | undefined;
    /** Deep link to the linkedResource. */
    webUrl?: string | undefined;
}
