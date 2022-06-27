import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidMobileAppIdentifier extends Partial<AdditionalDataHolder>, MobileAppIdentifier, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier for an app, as specified in the play store. */
    packageId?: string | undefined;
}
