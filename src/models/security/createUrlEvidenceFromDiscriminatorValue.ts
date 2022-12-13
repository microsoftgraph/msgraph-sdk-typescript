import {UrlEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUrlEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UrlEvidence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UrlEvidence();
}
