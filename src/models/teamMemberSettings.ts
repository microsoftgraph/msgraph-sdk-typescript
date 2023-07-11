import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamMemberSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If set to true, members can add and remove apps.
     */
    allowAddRemoveApps?: boolean | undefined;
    /**
     * If set to true, members can add and update private channels.
     */
    allowCreatePrivateChannels?: boolean | undefined;
    /**
     * If set to true, members can add and update channels.
     */
    allowCreateUpdateChannels?: boolean | undefined;
    /**
     * If set to true, members can add, update, and remove connectors.
     */
    allowCreateUpdateRemoveConnectors?: boolean | undefined;
    /**
     * If set to true, members can add, update, and remove tabs.
     */
    allowCreateUpdateRemoveTabs?: boolean | undefined;
    /**
     * If set to true, members can delete channels.
     */
    allowDeleteChannels?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
