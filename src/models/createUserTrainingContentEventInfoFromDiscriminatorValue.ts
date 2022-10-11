import {UserTrainingContentEventInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingContentEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserTrainingContentEventInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserTrainingContentEventInfo();
}
