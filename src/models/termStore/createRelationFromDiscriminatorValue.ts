import {RelationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationFromDiscriminatorValue(parseNode: ParseNode | undefined) : RelationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RelationImpl();
}
