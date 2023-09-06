import { deserializeIntoUserTrainingContentEventInfo } from './deserializeIntoUserTrainingContentEventInfo';
import { type UserTrainingContentEventInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserTrainingContentEventInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserTrainingContentEventInfo;
}
