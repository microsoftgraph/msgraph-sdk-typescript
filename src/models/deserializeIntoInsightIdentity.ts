import {InsightIdentity} from './insightIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInsightIdentity(insightIdentity: InsightIdentity | undefined = {} as InsightIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { insightIdentity.address = n.getStringValue(); },
        "displayName": n => { insightIdentity.displayName = n.getStringValue(); },
        "id": n => { insightIdentity.id = n.getStringValue(); },
        "@odata.type": n => { insightIdentity.odataType = n.getStringValue(); },
    }
}
