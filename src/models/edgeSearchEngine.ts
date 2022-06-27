import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EdgeSearchEngine extends Partial<AdditionalDataHolder>, EdgeSearchEngineBase, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Allows IT admins to set a predefined default search engine for MDM-Controlled devices. Possible values are: default, bing. */
    edgeSearchEngineType?: EdgeSearchEngineType | undefined;
}
