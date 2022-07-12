import {CommunicationsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCommunicationsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CommunicationsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CommunicationsMember1();
}
