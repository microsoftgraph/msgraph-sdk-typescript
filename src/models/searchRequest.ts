import { type AggregationOption } from './aggregationOption';
import { type CollapseProperty } from './collapseProperty';
import { EntityType } from './entityType';
import { type ResultTemplateOption } from './resultTemplateOption';
import { type SearchAlterationOptions } from './searchAlterationOptions';
import { type SearchQuery } from './searchQuery';
import { type SharePointOneDriveOptions } from './sharePointOneDriveOptions';
import { type SortProperty } from './sortProperty';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface SearchRequest extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Contains one or more filters to obtain search results aggregated and filtered to a specific value of a field. Optional.Build this filter based on a prior search that aggregates by the same field. From the response of the prior search, identify the searchBucket that filters results to the specific value of the field, use the string in its aggregationFilterToken property, and build an aggregation filter string in the format '{field}:/'{aggregationFilterToken}/''. If multiple values for the same field need to be provided, use the strings in its aggregationFilterToken property and build an aggregation filter string in the format '{field}:or(/'{aggregationFilterToken1}/',/'{aggregationFilterToken2}/')'. For example, searching and aggregating drive items by file type returns a searchBucket for the file type docx in the response. You can conveniently use the aggregationFilterToken returned for this searchBucket in a subsequent search query and filter matches down to drive items of the docx file type. Example 1 and example 2 show the actual requests and responses.
     */
    aggregationFilters?: string[] | undefined;
    /**
     * Specifies aggregations (also known as refiners) to be returned alongside search results. Optional.
     */
    aggregations?: AggregationOption[] | undefined;
    /**
     * Contains the ordered collection of fields and limit to collapse results. Optional.
     */
    collapseProperties?: CollapseProperty[] | undefined;
    /**
     * Contains the connection to be targeted.
     */
    contentSources?: string[] | undefined;
    /**
     * This triggers hybrid sort for messages : the first 3 messages are the most relevant. This property is only applicable to entityType=message. Optional.
     */
    enableTopResults?: boolean | undefined;
    /**
     * One or more types of resources expected in the response. Possible values are: event, message, driveItem, externalItem, site, list, listItem, drive, chatMessage, person, acronym, bookmark.  Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum:chatMessage, person, acronym, bookmark. See known limitations for those combinations of two or more entity types that are supported in the same search request. Required.
     */
    entityTypes?: EntityType[] | undefined;
    /**
     * Contains the fields to be returned for each resource object specified in entityTypes, allowing customization of the fields returned by default; otherwise, including additional fields such as custom managed properties from SharePoint and OneDrive, or custom fields in externalItem from the content that Microsoft Graph connectors bring in. The fields property can use the semantic labels applied to properties. For example, if a property is labeled as title, you can retrieve it using the following syntax: label_title. Optional.
     */
    fields?: string[] | undefined;
    /**
     * Specifies the offset for the search results. Offset 0 returns the very first result. Optional.
     */
    from?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The query property
     */
    query?: SearchQuery | undefined;
    /**
     * Query alteration options formatted in a JSON blob that contains two optional flags related to spelling correction. Optional.
     */
    queryAlterationOptions?: SearchAlterationOptions | undefined;
    /**
     * The geographic location for the search. Required for searches that use application permissions. For details, see Get the region value.
     */
    region?: string | undefined;
    /**
     * Provides the search result template options to render search results from connectors.
     */
    resultTemplateOptions?: ResultTemplateOption | undefined;
    /**
     * Indicates the kind of contents to be searched when a search is performed using application permissions. Optional.
     */
    sharePointOneDriveOptions?: SharePointOneDriveOptions | undefined;
    /**
     * The size of the page to be retrieved. The maximum value is 500. Optional.
     */
    size?: number | undefined;
    /**
     * Contains the ordered collection of fields and direction to sort results. There can be at most 5 sort properties in the collection. Optional.
     */
    sortProperties?: SortProperty[] | undefined;
}
