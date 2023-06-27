import {MobileLobApp} from './mobileLobApp';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsAppX extends MobileLobApp, Parsable {
    /**
     * Contains properties for Windows architecture.
     */
    applicableArchitectures?: WindowsArchitecture | undefined;
    /**
     * The identity name of the uploaded app package. For example: 'Contoso.DemoApp'.
     */
    identityName?: string | undefined;
    /**
     * The identity publisher hash of the uploaded app package. This is the hash of the publisher from the manifest. For example: 'AB82CD0XYZ'.
     */
    identityPublisherHash?: string | undefined;
    /**
     * The identity resource identifier of the uploaded app package. For example: 'TestResourceId'.
     */
    identityResourceIdentifier?: string | undefined;
    /**
     * The identity version of the uploaded app package. For example: '1.0.0.0'.
     */
    identityVersion?: string | undefined;
    /**
     * When TRUE, indicates that the app is a bundle. When FALSE, indicates that the app is not a bundle. By default, property is set to FALSE.
     */
    isBundle?: boolean | undefined;
    /**
     * The minimum operating system required for a Windows mobile app.
     */
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
}
