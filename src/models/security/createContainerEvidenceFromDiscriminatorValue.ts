import {deserializeIntoContainerEvidence} from './deserializeIntoContainerEvidence';
import {ContainerEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContainerEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContainerEvidence;
}
