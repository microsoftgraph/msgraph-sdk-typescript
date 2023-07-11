import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenPage extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the page
     */
    displayName?: string | undefined;
    /**
     * A list of apps, folders, and web clips to appear on a page. This collection can contain a maximum of 500 elements.
     */
    icons?: IosHomeScreenItem[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
