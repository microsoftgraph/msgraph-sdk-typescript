import {deserializeIntoFeatureTarget} from './deserializeIntoFeatureTarget';
import {FeatureTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFeatureTarget;
}
