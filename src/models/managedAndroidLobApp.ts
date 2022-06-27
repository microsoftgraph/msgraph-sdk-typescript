import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {ManagedMobileLobApp} from './managedMobileLobApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAndroidLobApp extends Partial<AdditionalDataHolder>, ManagedMobileLobApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The value for the minimum applicable operating system. */
    minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    packageId?: string | undefined;
    /** The version code of managed Android Line of Business (LoB) app. */
    versionCode?: string | undefined;
    /** The version name of managed Android Line of Business (LoB) app. */
    versionName?: string | undefined;
}
