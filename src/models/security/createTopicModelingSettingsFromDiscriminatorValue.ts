import { deserializeIntoTopicModelingSettings } from './deserializeIntoTopicModelingSettings';
import { type TopicModelingSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTopicModelingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTopicModelingSettings;
}
