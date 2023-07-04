import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTabConfiguration extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Url used for rendering tab contents in Teams. Required.
     */
    contentUrl?: string | undefined;
    /**
     * Identifier for the entity hosted by the tab provider.
     */
    entityId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Url called by Teams client when a Tab is removed using the Teams Client.
     */
    removeUrl?: string | undefined;
    /**
     * Url for showing tab contents outside of Teams.
     */
    websiteUrl?: string | undefined;
}
