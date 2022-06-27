import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenApp extends Partial<AdditionalDataHolder>, IosHomeScreenItem, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** BundleID of the app if isWebClip is false or the URL of a web clip if isWebClip is true. */
    bundleID?: string | undefined;
}
