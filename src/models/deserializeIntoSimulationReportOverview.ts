import {createRecommendedActionFromDiscriminatorValue} from './createRecommendedActionFromDiscriminatorValue';
import {createSimulationEventsContentFromDiscriminatorValue} from './createSimulationEventsContentFromDiscriminatorValue';
import {createTrainingEventsContentFromDiscriminatorValue} from './createTrainingEventsContentFromDiscriminatorValue';
import type {RecommendedAction} from './recommendedAction';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {serializeSimulationEventsContent} from './serializeSimulationEventsContent';
import {serializeTrainingEventsContent} from './serializeTrainingEventsContent';
import type {SimulationEventsContent} from './simulationEventsContent';
import type {SimulationReportOverview} from './simulationReportOverview';
import type {TrainingEventsContent} from './trainingEventsContent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSimulationReportOverview(simulationReportOverview: SimulationReportOverview | undefined = {} as SimulationReportOverview) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { simulationReportOverview.odataType = n.getStringValue(); },
        "recommendedActions": n => { simulationReportOverview.recommendedActions = n.getCollectionOfObjectValues<RecommendedAction>(createRecommendedActionFromDiscriminatorValue); },
        "resolvedTargetsCount": n => { simulationReportOverview.resolvedTargetsCount = n.getNumberValue(); },
        "simulationEventsContent": n => { simulationReportOverview.simulationEventsContent = n.getObjectValue<SimulationEventsContent>(createSimulationEventsContentFromDiscriminatorValue); },
        "trainingEventsContent": n => { simulationReportOverview.trainingEventsContent = n.getObjectValue<TrainingEventsContent>(createTrainingEventsContentFromDiscriminatorValue); },
    }
}
