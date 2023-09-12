import { type EdgeSearchEngineBase } from './edgeSearchEngineBase';
import { EdgeSearchEngineType } from './edgeSearchEngineType';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdgeSearchEngine extends EdgeSearchEngineBase, Parsable {
    /**
     * Allows IT admind to set a predefined default search engine for MDM-Controlled devices
     */
    edgeSearchEngineType?: EdgeSearchEngineType | undefined;
}
