import type {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import type {IosHomeScreenItem} from './iosHomeScreenItem';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenFolder extends IosHomeScreenItem, Parsable {
    /**
     * Pages of Home Screen Layout Icons which must be applications or web clips. This collection can contain a maximum of 500 elements.
     */
    pages?: IosHomeScreenFolderPage[] | undefined;
}
