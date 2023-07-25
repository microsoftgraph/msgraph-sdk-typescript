import {deserializeIntoBlobEvidence} from './deserializeIntoBlobEvidence';
import {BlobEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBlobEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBlobEvidence;
}
