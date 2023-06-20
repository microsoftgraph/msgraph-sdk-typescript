import {EdgeSearchEngine} from './edgeSearchEngine';
import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {serializeEdgeSearchEngineBase} from './serializeEdgeSearchEngineBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngine(edgeSearchEngine: EdgeSearchEngine | undefined = {} as EdgeSearchEngine, writer: SerializationWriter) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngine)
        writer.writeEnumValue<EdgeSearchEngineType>("edgeSearchEngineType", edgeSearchEngine.edgeSearchEngineType);
}
