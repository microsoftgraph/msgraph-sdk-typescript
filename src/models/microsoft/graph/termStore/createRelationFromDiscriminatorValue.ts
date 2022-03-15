import {Relation} from './relation';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Relation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Relation();
}
