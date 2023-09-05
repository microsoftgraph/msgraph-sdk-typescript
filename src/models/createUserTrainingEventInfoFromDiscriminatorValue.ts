import { deserializeIntoUserTrainingEventInfo } from './deserializeIntoUserTrainingEventInfo';
import { type UserTrainingEventInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserTrainingEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTrainingEventInfo;
}
