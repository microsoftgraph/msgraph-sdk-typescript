import { deserializeIntoOnPremisesDirectorySynchronizationFeature } from './deserializeIntoOnPremisesDirectorySynchronizationFeature';
import { type OnPremisesDirectorySynchronizationFeature } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesDirectorySynchronizationFeatureFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesDirectorySynchronizationFeature;
}
