import {IosHomeScreenItem} from './iosHomeScreenItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenApp extends IosHomeScreenItem, Parsable {
    /**
     * BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true.
     */
    bundleID?: string | undefined;
}
