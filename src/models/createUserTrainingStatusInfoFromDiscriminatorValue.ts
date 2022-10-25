import {UserTrainingStatusInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingStatusInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTrainingStatusInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTrainingStatusInfo();
}
