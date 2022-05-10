import {RiskyUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserImpl();
}
