import {deserializeIntoUserTrainingEventInfo} from './deserializeIntoUserTrainingEventInfo';
import {UserTrainingEventInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserTrainingEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTrainingEventInfo;
}
