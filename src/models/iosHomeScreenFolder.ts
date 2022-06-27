import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenFolder extends Partial<AdditionalDataHolder>, IosHomeScreenItem, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements. */
    pages?: IosHomeScreenFolderPage[] | undefined;
}
