import type {RecommendedAction} from './recommendedAction';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {serializeSimulationEventsContent} from './serializeSimulationEventsContent';
import {serializeTrainingEventsContent} from './serializeTrainingEventsContent';
import type {SimulationEventsContent} from './simulationEventsContent';
import type {SimulationReportOverview} from './simulationReportOverview';
import type {TrainingEventsContent} from './trainingEventsContent';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationReportOverview(writer: SerializationWriter, simulationReportOverview: SimulationReportOverview | undefined = {} as SimulationReportOverview) : void {
        writer.writeStringValue("@odata.type", simulationReportOverview.odataType);
        writer.writeCollectionOfObjectValues<RecommendedAction>("recommendedActions", simulationReportOverview.recommendedActions, serializeRecommendedAction);
        writer.writeNumberValue("resolvedTargetsCount", simulationReportOverview.resolvedTargetsCount);
        writer.writeObjectValue<SimulationEventsContent>("simulationEventsContent", simulationReportOverview.simulationEventsContent, serializeSimulationEventsContent);
        writer.writeObjectValue<TrainingEventsContent>("trainingEventsContent", simulationReportOverview.trainingEventsContent, serializeTrainingEventsContent);
        writer.writeAdditionalData(simulationReportOverview.additionalData);
}
