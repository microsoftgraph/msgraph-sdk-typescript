import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftStoreForBusinessAppAssignmentSettings extends Partial<AdditionalDataHolder>, MobileAppAssignmentSettings, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether or not to use device execution context for Microsoft Store for Business mobile app. */
    useDeviceContext?: boolean | undefined;
}
