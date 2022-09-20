import {ReferenceUpdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createReferenceUpdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ReferenceUpdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ReferenceUpdate();
}
