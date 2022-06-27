import {MobileApp} from './mobileApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WebApp extends Partial<AdditionalDataHolder>, MobileApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The web app URL. This property cannot be PATCHed. */
    appUrl?: string | undefined;
    /** Whether or not to use managed browser. This property is only applicable for Android and IOS. */
    useManagedBrowser?: boolean | undefined;
}
