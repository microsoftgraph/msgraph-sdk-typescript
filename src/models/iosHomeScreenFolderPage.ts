import {IosHomeScreenApp} from './iosHomeScreenApp';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosHomeScreenFolderPage extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500 elements.
     */
    apps?: IosHomeScreenApp[] | undefined;
    /**
     * Name of the folder page
     */
    displayName?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
