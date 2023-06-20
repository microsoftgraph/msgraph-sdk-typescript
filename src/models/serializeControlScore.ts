import {ControlScore} from './controlScore';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeControlScore(controlScore: ControlScore | undefined = {} as ControlScore, writer: SerializationWriter) : void {
        writer.writeStringValue("controlCategory", controlScore.controlCategory);
        writer.writeStringValue("controlName", controlScore.controlName);
        writer.writeStringValue("description", controlScore.description);
        writer.writeStringValue("@odata.type", controlScore.odataType);
        writer.writeNumberValue("score", controlScore.score);
        writer.writeAdditionalData(controlScore.additionalData);
}
