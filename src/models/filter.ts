import {FilterGroup} from './filterGroup';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Filter extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The categoryFilterGroups property
     */
    categoryFilterGroups?: FilterGroup[] | undefined;
    /**
     * The groups property
     */
    groups?: FilterGroup[] | undefined;
    /**
     * The inputFilterGroups property
     */
    inputFilterGroups?: FilterGroup[] | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
