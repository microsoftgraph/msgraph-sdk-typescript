import { deserializeIntoUrlEvidence } from './deserializeIntoUrlEvidence';
import { type UrlEvidence } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUrlEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUrlEvidence;
}
