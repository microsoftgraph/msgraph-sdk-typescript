import {KeyValuePair} from './keyValuePair';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestDetail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Count of items that are excluded from the request.
     */
    excludedItemCount?: number | undefined;
    /**
     * Count of items per insight.
     */
    insightCounts?: KeyValuePair[] | undefined;
    /**
     * Count of items found.
     */
    itemCount?: number | undefined;
    /**
     * Count of item that need review.
     */
    itemNeedReview?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams.
     */
    productItemCounts?: KeyValuePair[] | undefined;
    /**
     * Count of items signed off by the administrator.
     */
    signedOffItemCount?: number | undefined;
    /**
     * Total item size in bytes.
     */
    totalItemSize?: number | undefined;
}
