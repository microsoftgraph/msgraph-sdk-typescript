import {deserializeIntoAmazonResourceEvidence} from './deserializeIntoAmazonResourceEvidence';
import {AmazonResourceEvidence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAmazonResourceEvidenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAmazonResourceEvidence;
}
