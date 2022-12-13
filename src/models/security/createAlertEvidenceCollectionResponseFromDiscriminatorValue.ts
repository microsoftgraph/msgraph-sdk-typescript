import {AlertEvidenceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertEvidenceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertEvidenceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertEvidenceCollectionResponse();
}
