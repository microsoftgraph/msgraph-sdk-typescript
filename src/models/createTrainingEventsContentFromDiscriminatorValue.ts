import {deserializeIntoTrainingEventsContent} from './deserializeIntoTrainingEventsContent';
import {TrainingEventsContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrainingEventsContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrainingEventsContent;
}
