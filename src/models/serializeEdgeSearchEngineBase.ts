import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineBase(edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {} as EdgeSearchEngineBase, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", edgeSearchEngineBase.odataType);
        writer.writeAdditionalData(edgeSearchEngineBase.additionalData);
}
