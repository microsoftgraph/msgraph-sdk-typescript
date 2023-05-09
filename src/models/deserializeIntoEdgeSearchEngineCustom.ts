import {deserializeIntoEdgeSearchEngineBase} from './deserializeIntoEdgeSearchEngineBase';
import {EdgeSearchEngineCustom} from './edgeSearchEngineCustom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngineCustom(edgeSearchEngineCustom: EdgeSearchEngineCustom | undefined = {} as EdgeSearchEngineCustom) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEdgeSearchEngineBase(edgeSearchEngineCustom),
        "edgeSearchEngineOpenSearchXmlUrl": n => { edgeSearchEngineCustom.edgeSearchEngineOpenSearchXmlUrl = n.getStringValue(); },
    }
}
