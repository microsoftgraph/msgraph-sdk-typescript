import {OnPremisesDirectorySynchronizationFeature} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesDirectorySynchronizationFeature {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesDirectorySynchronizationFeature();
}
