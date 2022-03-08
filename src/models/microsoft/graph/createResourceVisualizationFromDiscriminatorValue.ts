import {ResourceVisualization} from './resourceVisualization';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceVisualizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceVisualization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceVisualization();
}
