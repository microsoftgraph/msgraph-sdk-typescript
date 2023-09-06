import { type EdgeSearchEngineBase } from './edgeSearchEngineBase';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdgeSearchEngineBase(writer: SerializationWriter, edgeSearchEngineBase: EdgeSearchEngineBase | undefined = {} as EdgeSearchEngineBase) : void {
        writer.writeStringValue("@odata.type", edgeSearchEngineBase.odataType);
        writer.writeAdditionalData(edgeSearchEngineBase.additionalData);
}
