import {AccessPackageApprovalStageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessPackageApprovalStageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessPackageApprovalStageCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessPackageApprovalStageCollectionResponse();
}
