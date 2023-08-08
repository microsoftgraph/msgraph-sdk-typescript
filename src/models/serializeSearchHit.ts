import type {Entity} from './entity';
import type {SearchHit} from './searchHit';
import {serializeEntity} from './serializeEntity';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchHit(writer: SerializationWriter, searchHit: SearchHit | undefined = {} as SearchHit) : void {
        writer.writeStringValue("contentSource", searchHit.contentSource);
        writer.writeStringValue("hitId", searchHit.hitId);
        writer.writeBooleanValue("isCollapsed", searchHit.isCollapsed);
        writer.writeStringValue("@odata.type", searchHit.odataType);
        writer.writeNumberValue("rank", searchHit.rank);
        writer.writeObjectValue<Entity>("resource", searchHit.resource, serializeEntity);
        writer.writeStringValue("resultTemplateId", searchHit.resultTemplateId);
        writer.writeStringValue("summary", searchHit.summary);
        writer.writeAdditionalData(searchHit.additionalData);
}
