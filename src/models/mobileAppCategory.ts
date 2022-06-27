import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCategory extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the app category. */
    displayName?: string | undefined;
    /** The date and time the mobileAppCategory was last modified. */
    lastModifiedDateTime?: Date | undefined;
}
