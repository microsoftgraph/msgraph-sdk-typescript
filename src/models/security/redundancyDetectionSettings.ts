import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RedundancyDetectionSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates whether email threading and near duplicate detection are enabled.
     */
    isEnabled?: boolean | undefined;
    /**
     * Specifies the maximum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     */
    maxWords?: number | undefined;
    /**
     * Specifies the minimum number of words used for email threading and near duplicate detection. To learn more, see Minimum/maximum number of words.
     */
    minWords?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Specifies the similarity level for documents to be put in the same near duplicate set. To learn more, see Document and email similarity threshold.
     */
    similarityThreshold?: number | undefined;
}
