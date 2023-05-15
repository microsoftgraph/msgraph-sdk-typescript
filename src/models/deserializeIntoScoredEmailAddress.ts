import {ScoredEmailAddress} from './scoredEmailAddress';
import {SelectionLikelihoodInfo} from './selectionLikelihoodInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScoredEmailAddress(scoredEmailAddress: ScoredEmailAddress | undefined = {} as ScoredEmailAddress) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { scoredEmailAddress.address = n.getStringValue(); },
        "itemId": n => { scoredEmailAddress.itemId = n.getStringValue(); },
        "@odata.type": n => { scoredEmailAddress.odataType = n.getStringValue(); },
        "relevanceScore": n => { scoredEmailAddress.relevanceScore = n.getNumberValue(); },
        "selectionLikelihood": n => { scoredEmailAddress.selectionLikelihood = n.getEnumValue<SelectionLikelihoodInfo>(SelectionLikelihoodInfo); },
    }
}
