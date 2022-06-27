import {Entity} from './entity';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileApp extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier for an app with it's operating system type. */
    mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /** Version of the entity. */
    version?: string | undefined;
}
