import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {Entity} from './entity';
import {SearchHit} from './searchHit';
import {serializeEntity} from './serializeEntity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHit(searchHit: SearchHit | undefined = {} as SearchHit) : Record<string, (node: ParseNode) => void> {
    return {
        "contentSource": n => { searchHit.contentSource = n.getStringValue(); },
        "hitId": n => { searchHit.hitId = n.getStringValue(); },
        "@odata.type": n => { searchHit.odataType = n.getStringValue(); },
        "rank": n => { searchHit.rank = n.getNumberValue(); },
        "resource": n => { searchHit.resource = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
        "resultTemplateId": n => { searchHit.resultTemplateId = n.getStringValue(); },
        "summary": n => { searchHit.summary = n.getStringValue(); },
    }
}
