import {FilterGroup} from './filterGroup';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Filter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * *Experimental* Filter group set used to decide whether given object belongs and should be processed as part of this object mapping. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     */
    categoryFilterGroups?: FilterGroup[] | undefined;
    /**
     * Filter group set used to decide whether given object is in scope for provisioning. This is the filter which should be used in most cases. If an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is not satisfied any longer, such object will get de-provisioned'. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     */
    groups?: FilterGroup[] | undefined;
    /**
     * *Experimental* Filter group set used to filter out objects at the early stage of reading them from the directory. If an object doesn't satisfy this filter it will not be processed further. Important to understand is that if an object used to satisfy this filter at a given moment, and then the object or the filter was changed so that filter is no longer satisfied, such object will NOT get de-provisioned. An object is considered in scope if ANY of the groups in the collection is evaluated to true.
     */
    inputFilterGroups?: FilterGroup[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
