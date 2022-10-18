import {AccessReviewStageSettingsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageSettingsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStageSettingsCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStageSettingsCollectionResponse();
}
