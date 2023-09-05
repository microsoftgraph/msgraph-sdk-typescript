import { type EdgeSearchEngine } from './edgeSearchEngine';
import { EdgeSearchEngineType } from './edgeSearchEngineType';
import { serializeEdgeSearchEngineBase } from './serializeEdgeSearchEngineBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngine(writer: SerializationWriter, edgeSearchEngine: EdgeSearchEngine | undefined = {} as EdgeSearchEngine) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngine)
        writer.writeEnumValue<EdgeSearchEngineType>("edgeSearchEngineType", edgeSearchEngine.edgeSearchEngineType);
}
