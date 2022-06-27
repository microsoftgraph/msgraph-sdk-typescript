import {MobileLobApp} from './mobileLobApp';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppX extends Partial<AdditionalDataHolder>, MobileLobApp, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64. */
    applicableArchitectures?: WindowsArchitecture | undefined;
    /** The Windows device type(s) for which this app can run on. Possible values are: none, desktop, mobile, holographic, team. */
    applicableDeviceTypes?: WindowsDeviceType | undefined;
    /** The Identity Name. */
    identityName?: string | undefined;
    /** The Identity Publisher Hash. */
    identityPublisherHash?: string | undefined;
    /** The Identity Resource Identifier. */
    identityResourceIdentifier?: string | undefined;
    /** The identity version. */
    identityVersion?: string | undefined;
    /** Whether or not the app is a bundle. */
    isBundle?: boolean | undefined;
    /** The minimum operating system required for a Windows mobile app. */
    minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
}
