import {deserializeIntoUrlEvidence} from './deserializeIntoUrlEvidence';
import {UrlEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUrlEvidence;
}
