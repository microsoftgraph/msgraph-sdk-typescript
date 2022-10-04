import {CallParticipantInfoCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallParticipantInfoCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallParticipantInfoCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallParticipantInfoCollectionResponse();
}
