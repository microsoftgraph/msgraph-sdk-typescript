import {RecommendedAction} from './recommendedAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecommendedAction(recommendedAction: RecommendedAction | undefined = {} as RecommendedAction) : Record<string, (node: ParseNode) => void> {
    return {
        "actionWebUrl": n => { recommendedAction.actionWebUrl = n.getStringValue(); },
        "@odata.type": n => { recommendedAction.odataType = n.getStringValue(); },
        "potentialScoreImpact": n => { recommendedAction.potentialScoreImpact = n.getNumberValue(); },
        "title": n => { recommendedAction.title = n.getStringValue(); },
    }
}
