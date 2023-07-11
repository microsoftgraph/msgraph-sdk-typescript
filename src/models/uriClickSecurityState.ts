import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UriClickSecurityState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The clickAction property
     */
    clickAction?: string | undefined;
    /**
     * The clickDateTime property
     */
    clickDateTime?: Date | undefined;
    /**
     * The id property
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The sourceId property
     */
    sourceId?: string | undefined;
    /**
     * The uriDomain property
     */
    uriDomain?: string | undefined;
    /**
     * The verdict property
     */
    verdict?: string | undefined;
}
