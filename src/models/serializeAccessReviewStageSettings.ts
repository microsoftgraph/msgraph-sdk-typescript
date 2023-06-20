import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageSettings(accessReviewStageSettings: AccessReviewStageSettings | undefined = {} as AccessReviewStageSettings, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("decisionsThatWillMoveToNextStage", accessReviewStageSettings.decisionsThatWillMoveToNextStage);
        writer.writeCollectionOfPrimitiveValues<string>("dependsOn", accessReviewStageSettings.dependsOn);
        writer.writeNumberValue("durationInDays", accessReviewStageSettings.durationInDays);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewStageSettings.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeStringValue("@odata.type", accessReviewStageSettings.odataType);
        writer.writeBooleanValue("recommendationsEnabled", accessReviewStageSettings.recommendationsEnabled);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewStageSettings.reviewers, serializeAccessReviewReviewerScope);
        writer.writeStringValue("stageId", accessReviewStageSettings.stageId);
        writer.writeAdditionalData(accessReviewStageSettings.additionalData);
}
