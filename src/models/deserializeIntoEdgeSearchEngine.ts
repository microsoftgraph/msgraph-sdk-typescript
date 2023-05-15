import {deserializeIntoEdgeSearchEngineBase} from './deserializeIntoEdgeSearchEngineBase';
import {EdgeSearchEngine} from './edgeSearchEngine';
import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngine(edgeSearchEngine: EdgeSearchEngine | undefined = {} as EdgeSearchEngine) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngine),
        "edgeSearchEngineType": n => { edgeSearchEngine.edgeSearchEngineType = n.getEnumValue<EdgeSearchEngineType>(EdgeSearchEngineType); },
    }
}
