import {deserializeIntoUnclassifiedArtifact} from './deserializeIntoUnclassifiedArtifact';
import {UnclassifiedArtifact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnclassifiedArtifactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUnclassifiedArtifact;
}
