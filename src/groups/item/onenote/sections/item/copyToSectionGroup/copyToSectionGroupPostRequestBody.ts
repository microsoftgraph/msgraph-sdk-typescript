import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyToSectionGroupPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The groupId property
     */
    groupId?: string | undefined;
    /**
     * The id property
     */
    id?: string | undefined;
    /**
     * The renameAs property
     */
    renameAs?: string | undefined;
    /**
     * The siteCollectionId property
     */
    siteCollectionId?: string | undefined;
    /**
     * The siteId property
     */
    siteId?: string | undefined;
}
