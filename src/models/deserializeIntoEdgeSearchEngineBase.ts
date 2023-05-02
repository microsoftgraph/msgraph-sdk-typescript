import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdgeSearchEngineBase(edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {} as EdgeSearchEngineBase) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { edgeSearchEngineBase.odataType = n.getStringValue(); },
    }
}
