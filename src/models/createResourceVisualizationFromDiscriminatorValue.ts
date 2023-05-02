import {deserializeIntoResourceVisualization} from './deserializeIntoResourceVisualization';
import {ResourceVisualization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceVisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceVisualization;
}
