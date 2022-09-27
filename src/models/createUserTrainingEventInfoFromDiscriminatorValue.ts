import {UserTrainingEventInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTrainingEventInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTrainingEventInfo();
}
