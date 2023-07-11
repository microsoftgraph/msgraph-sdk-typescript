import {IosDeviceType} from './iosDeviceType';
import {MobileApp} from './mobileApp';
import {VppLicensingType} from './vppLicensingType';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppApp extends MobileApp, Parsable {
    /**
     * The applicable iOS Device Type.
     */
    applicableDeviceType?: IosDeviceType | undefined;
    /**
     * The store URL.
     */
    appStoreUrl?: string | undefined;
    /**
     * The Identity Name.
     */
    bundleId?: string | undefined;
    /**
     * The supported License Type.
     */
    licensingType?: VppLicensingType | undefined;
    /**
     * The VPP application release date and time.
     */
    releaseDateTime?: Date | undefined;
    /**
     * The total number of VPP licenses.
     */
    totalLicenseCount?: number | undefined;
    /**
     * The number of VPP licenses in use.
     */
    usedLicenseCount?: number | undefined;
    /**
     * Possible types of an Apple Volume Purchase Program token.
     */
    vppTokenAccountType?: VppTokenAccountType | undefined;
    /**
     * The Apple Id associated with the given Apple Volume Purchase Program Token.
     */
    vppTokenAppleId?: string | undefined;
    /**
     * The organization associated with the Apple Volume Purchase Program Token
     */
    vppTokenOrganizationName?: string | undefined;
}
