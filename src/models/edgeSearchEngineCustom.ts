import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EdgeSearchEngineCustom extends Partial<AdditionalDataHolder>, EdgeSearchEngineBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine. */
    edgeSearchEngineOpenSearchXmlUrl?: string | undefined;
}
