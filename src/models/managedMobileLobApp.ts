import {ManagedApp} from './managedApp';
import {MobileAppContent} from './mobileAppContent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobApp extends ManagedApp, Parsable {
    /**
     * The internal committed content version.
     */
    committedContentVersion?: string | undefined;
    /**
     * The list of content versions for this app.
     */
    contentVersions?: MobileAppContent[] | undefined;
    /**
     * The name of the main Lob application file.
     */
    fileName?: string | undefined;
    /**
     * The total size, including all uploaded files.
     */
    size?: number | undefined;
}
