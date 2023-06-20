import {EdgeSearchEngineCustom} from './edgeSearchEngineCustom';
import {serializeEdgeSearchEngineBase} from './serializeEdgeSearchEngineBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineCustom(edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {} as EdgeSearchEngineCustom, writer: SerializationWriter) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngineCustom)
        writer.writeStringValue("edgeSearchEngineOpenSearchXmlUrl", edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl);
}
