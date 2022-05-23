import {ParticipantCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParticipantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParticipantCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParticipantCollectionResponseImpl();
}
