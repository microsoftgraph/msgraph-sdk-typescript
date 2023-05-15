import {deserializeIntoTopicModelingSettings} from './deserializeIntoTopicModelingSettings';
import {TopicModelingSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTopicModelingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTopicModelingSettings;
}
