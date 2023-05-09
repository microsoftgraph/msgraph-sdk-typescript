import {EdgeSearchEngineCustom} from './edgeSearchEngineCustom';
import {serializeEdgeSearchEngineBase} from './serializeEdgeSearchEngineBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineCustom(writer: SerializationWriter, edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {} as EdgeSearchEngineCustom) : void {
        serializeEdgeSearchEngineBase(writer, edgeSearchEngineCustom)
        writer.writeStringValue("edgeSearchEngineOpenSearchXmlUrl", edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl);
}
