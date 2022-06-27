import {ExternalGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalGroupImpl();
}
