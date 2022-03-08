import {PersonType} from './personType';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonType();
}
