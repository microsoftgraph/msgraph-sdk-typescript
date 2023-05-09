import {RecommendedAction} from './recommendedAction';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {serializeSimulationEventsContent} from './serializeSimulationEventsContent';
import {serializeTrainingEventsContent} from './serializeTrainingEventsContent';
import {SimulationEventsContent} from './simulationEventsContent';
import {SimulationReportOverview} from './simulationReportOverview';
import {TrainingEventsContent} from './trainingEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSimulationReportOverview(writer: SerializationWriter, simulationReportOverview: SimulationReportOverview | undefined = {} as SimulationReportOverview) : void {
        writer.writeStringValue("@odata.type", simulationReportOverview.odataType);
        writer.writeCollectionOfObjectValues<RecommendedAction>("recommendedActions", simulationReportOverview.recommendedActions, serializeRecommendedAction);
        writer.writeNumberValue("resolvedTargetsCount", simulationReportOverview.resolvedTargetsCount);
        writer.writeObjectValue<SimulationEventsContent>("simulationEventsContent", simulationReportOverview.simulationEventsContent, serializeSimulationEventsContent);
        writer.writeObjectValue<TrainingEventsContent>("trainingEventsContent", simulationReportOverview.trainingEventsContent, serializeTrainingEventsContent);
        writer.writeAdditionalData(simulationReportOverview.additionalData);
}
