import { deserializeIntoEdgeSearchEngineBase } from './deserializeIntoEdgeSearchEngineBase';
import { type EdgeSearchEngineCustom } from './edgeSearchEngineCustom';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngineCustom(edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {} as EdgeSearchEngineCustom) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngineCustom),
        "edgeSearchEngineOpenSearchXmlUrl": n => { edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl = n.getStringValue(); },
    }
}
