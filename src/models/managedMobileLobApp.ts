import {ManagedApp} from './managedApp';
import {MobileAppContent} from './mobileAppContent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobApp extends Partial<AdditionalDataHolder>, ManagedApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The internal committed content version. */
    committedContentVersion?: string | undefined;
    /** The list of content versions for this app. */
    contentVersions?: MobileAppContent[] | undefined;
    /** The name of the main Lob application file. */
    fileName?: string | undefined;
    /** The total size, including all uploaded files. */
    size?: number | undefined;
}
