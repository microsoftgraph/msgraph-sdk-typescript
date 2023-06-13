import {AggregationOption} from './aggregationOption';
import {CollapseProperty} from './collapseProperty';
import {EntityType} from './entityType';
import {ResultTemplateOption} from './resultTemplateOption';
import {SearchAlterationOptions} from './searchAlterationOptions';
import {SearchQuery} from './searchQuery';
import {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import {SortProperty} from './sortProperty';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SearchRequest extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The aggregationFilters property */
    aggregationFilters?: string[] | undefined;
    /** The aggregations property */
    aggregations?: AggregationOption[] | undefined;
    /** The collapseProperties property */
    collapseProperties?: CollapseProperty[] | undefined;
    /** The contentSources property */
    contentSources?: string[] | undefined;
    /** The enableTopResults property */
    enableTopResults?: boolean | undefined;
    /** The entityTypes property */
    entityTypes?: EntityType[] | undefined;
    /** The fields property */
    fields?: string[] | undefined;
    /** The from property */
    from?: number | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The query property */
    query?: SearchQuery | undefined;
    /** The queryAlterationOptions property */
    queryAlterationOptions?: SearchAlterationOptions | undefined;
    /** The region property */
    region?: string | undefined;
    /** The resultTemplateOptions property */
    resultTemplateOptions?: ResultTemplateOption | undefined;
    /** The sharePointOneDriveOptions property */
    sharePointOneDriveOptions?: SharePointOneDriveOptions | undefined;
    /** The size property */
    size?: number | undefined;
    /** The sortProperties property */
    sortProperties?: SortProperty[] | undefined;
}
