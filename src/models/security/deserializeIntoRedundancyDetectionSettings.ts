import {RedundancyDetectionSettings} from './redundancyDetectionSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRedundancyDetectionSettings(redundancyDetectionSettings: RedundancyDetectionSettings | undefined = {} as RedundancyDetectionSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { redundancyDetectionSettings.isEnabled = n.getBooleanValue(); },
        "maxWords": n => { redundancyDetectionSettings.maxWords = n.getNumberValue(); },
        "minWords": n => { redundancyDetectionSettings.minWords = n.getNumberValue(); },
        "@odata.type": n => { redundancyDetectionSettings.odataType = n.getStringValue(); },
        "similarityThreshold": n => { redundancyDetectionSettings.similarityThreshold = n.getNumberValue(); },
    }
}
