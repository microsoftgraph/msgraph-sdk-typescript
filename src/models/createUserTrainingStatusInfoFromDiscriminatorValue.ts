import { deserializeIntoUserTrainingStatusInfo } from './deserializeIntoUserTrainingStatusInfo';
import { type UserTrainingStatusInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserTrainingStatusInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTrainingStatusInfo;
}
