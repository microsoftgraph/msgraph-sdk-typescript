import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineBase(writer: SerializationWriter, edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {} as EdgeSearchEngineBase) : void {
        writer.writeStringValue("@odata.type", edgeSearchEngineBase.odataType);
        writer.writeAdditionalData(edgeSearchEngineBase.additionalData);
}
