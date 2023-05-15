import {TopicModelingSettings} from './topicModelingSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTopicModelingSettings(topicModelingSettings: TopicModelingSettings | undefined = {} as TopicModelingSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "dynamicallyAdjustTopicCount": n => { topicModelingSettings.dynamicallyAdjustTopicCount = n.getBooleanValue(); },
        "ignoreNumbers": n => { topicModelingSettings.ignoreNumbers = n.getBooleanValue(); },
        "isEnabled": n => { topicModelingSettings.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { topicModelingSettings.odataType = n.getStringValue(); },
        "topicCount": n => { topicModelingSettings.topicCount = n.getNumberValue(); },
    }
}
