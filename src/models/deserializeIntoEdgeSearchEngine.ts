import { deserializeIntoEdgeSearchEngineBase } from './deserializeIntoEdgeSearchEngineBase';
import { type EdgeSearchEngine } from './edgeSearchEngine';
import { EdgeSearchEngineType } from './edgeSearchEngineType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngine(edgeSearchEngine: EdgeSearchEngine | undefined = {} as EdgeSearchEngine) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngine),
        "edgeSearchEngineType": n => { edgeSearchEngine.edgeSearchEngineType = n.getEnumValue<EdgeSearchEngineType>(EdgeSearchEngineType); },
    }
}
