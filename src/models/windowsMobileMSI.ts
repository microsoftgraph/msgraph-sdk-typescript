import {MobileLobApp} from './mobileLobApp';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsMobileMSI extends MobileLobApp, Parsable {
    /**
     * The command line.
     */
    commandLine?: string | undefined;
    /**
     * A boolean to control whether the app's version will be used to detect the app after it is installed on a device. Set this to true for Windows Mobile MSI Line of Business (LoB) apps that use a self update feature.
     */
    ignoreVersionDetection?: boolean | undefined;
    /**
     * The product code.
     */
    productCode?: string | undefined;
    /**
     * The product version of Windows Mobile MSI Line of Business (LoB) app.
     */
    productVersion?: string | undefined;
}
