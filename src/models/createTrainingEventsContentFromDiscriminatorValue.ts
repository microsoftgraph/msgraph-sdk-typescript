import { deserializeIntoTrainingEventsContent } from './deserializeIntoTrainingEventsContent';
import { type TrainingEventsContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTrainingEventsContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTrainingEventsContent;
}
