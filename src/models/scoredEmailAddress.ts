import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ScoredEmailAddress extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The email address.
     */
    address?: string | undefined;
    /**
     * The itemId property
     */
    itemId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The relevance score of the email address. A relevance score is used as a sort key, in relation to the other returned results. A higher relevance score value corresponds to a more relevant result. Relevance is determined by the user’s communication and collaboration patterns and business relationships.
     */
    relevanceScore?: number | undefined;
    /**
     * The selectionLikelihood property
     */
    selectionLikelihood?: SelectionLikelihoodInfo | undefined;
}
