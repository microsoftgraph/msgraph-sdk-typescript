import {AccessReviewStageSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewStageSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewStageSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewStageSettings();
}
