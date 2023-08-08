import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import type {Entity} from './entity';
import type {SearchHit} from './searchHit';
import {serializeEntity} from './serializeEntity';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHit(searchHit: SearchHit | undefined = {} as SearchHit) : Record<string, (node: ParseNode) => void> {
    return {
        "contentSource": n => { searchHit.contentSource = n.getStringValue(); },
        "hitId": n => { searchHit.hitId = n.getStringValue(); },
        "isCollapsed": n => { searchHit.isCollapsed = n.getBooleanValue(); },
        "@odata.type": n => { searchHit.odataType = n.getStringValue(); },
        "rank": n => { searchHit.rank = n.getNumberValue(); },
        "resource": n => { searchHit.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resultTemplateId": n => { searchHit.resultTemplateId = n.getStringValue(); },
        "summary": n => { searchHit.summary = n.getStringValue(); },
    }
}
