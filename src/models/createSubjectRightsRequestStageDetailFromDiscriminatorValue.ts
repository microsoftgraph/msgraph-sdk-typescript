import {SubjectRightsRequestStageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubjectRightsRequestStageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : SubjectRightsRequestStageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SubjectRightsRequestStageDetailImpl();
}
