import {InsightIdentity} from './insightIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInsightIdentity(writer: SerializationWriter, insightIdentity: InsightIdentity | undefined = {} as InsightIdentity) : void {
        writer.writeStringValue("address", insightIdentity.address);
        writer.writeStringValue("displayName", insightIdentity.displayName);
        writer.writeStringValue("id", insightIdentity.id);
        writer.writeStringValue("@odata.type", insightIdentity.odataType);
        writer.writeAdditionalData(insightIdentity.additionalData);
}
