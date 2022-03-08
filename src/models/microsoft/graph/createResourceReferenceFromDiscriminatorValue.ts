import {ResourceReference} from './resourceReference';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : ResourceReference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ResourceReference();
}
