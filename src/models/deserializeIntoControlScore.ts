import {ControlScore} from './controlScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoControlScore(controlScore: ControlScore | undefined = {} as ControlScore) : Record<string, (node: ParseNode) => void> {
    return {
        "controlCategory": n => { controlScore.controlCategory = n.getStringValue(); },
        "controlName": n => { controlScore.controlName = n.getStringValue(); },
        "description": n => { controlScore.description = n.getStringValue(); },
        "@odata.type": n => { controlScore.odataType = n.getStringValue(); },
        "score": n => { controlScore.score = n.getNumberValue(); },
    }
}
