import { type RecommendedAction } from './recommendedAction';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRecommendedAction(writer: SerializationWriter, recommendedAction: RecommendedAction | undefined = {} as RecommendedAction) : void {
        writer.writeStringValue("actionWebUrl", recommendedAction.actionWebUrl);
        writer.writeStringValue("@odata.type", recommendedAction.odataType);
        writer.writeNumberValue("potentialScoreImpact", recommendedAction.potentialScoreImpact);
        writer.writeStringValue("title", recommendedAction.title);
        writer.writeAdditionalData(recommendedAction.additionalData);
}
