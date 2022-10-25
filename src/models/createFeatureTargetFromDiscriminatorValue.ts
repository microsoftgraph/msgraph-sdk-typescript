import {FeatureTarget} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFeatureTargetFromDiscriminatorValue(parseNode: ParseNode | undefined) : FeatureTarget {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FeatureTarget();
}
