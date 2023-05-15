import {createRecommendedActionFromDiscriminatorValue} from './createRecommendedActionFromDiscriminatorValue';
import {createSimulationEventsContentFromDiscriminatorValue} from './createSimulationEventsContentFromDiscriminatorValue';
import {createTrainingEventsContentFromDiscriminatorValue} from './createTrainingEventsContentFromDiscriminatorValue';
import {RecommendedAction} from './recommendedAction';
import {serializeRecommendedAction} from './serializeRecommendedAction';
import {serializeSimulationEventsContent} from './serializeSimulationEventsContent';
import {serializeTrainingEventsContent} from './serializeTrainingEventsContent';
import {SimulationEventsContent} from './simulationEventsContent';
import {SimulationReportOverview} from './simulationReportOverview';
import {TrainingEventsContent} from './trainingEventsContent';
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
