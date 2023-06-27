import {AppListItem} from './appListItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosNetworkUsageRule extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If set to true, corresponding managed apps will not be allowed to use cellular data at any time.
     */
    cellularDataBlocked?: boolean | undefined;
    /**
     * If set to true, corresponding managed apps will not be allowed to use cellular data when roaming.
     */
    cellularDataBlockWhenRoaming?: boolean | undefined;
    /**
     * Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500 elements.
     */
    managedApps?: AppListItem[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
