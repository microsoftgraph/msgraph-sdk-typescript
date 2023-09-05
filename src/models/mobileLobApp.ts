import { type MobileApp } from './mobileApp';
import { type MobileAppContent } from './mobileAppContent';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileLobApp extends MobileApp, Parsable {
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
