import {AccessReviewStageSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStageSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStageSettingsImpl();
}
