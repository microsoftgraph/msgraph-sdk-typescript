import {ReferenceCreate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceCreateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceCreate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceCreate();
}
