import {RiskyUser} from './riskyUser';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUser();
}
