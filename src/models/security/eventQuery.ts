import {QueryType} from './queryType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EventQuery extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Represents unique identification for the  query. 'Asset ID' for SharePoint Online and OneDrive for Business, 'keywords' for Exchange Online.
     */
    query?: string | undefined;
    /**
     * Represents the type of query associated with an event. 'files' for SPO and ODB and 'messages' for EXO.The possible values are: files, messages, unknownFutureValue.
     */
    queryType?: QueryType | undefined;
}
