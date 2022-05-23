import {RequiredResourceAccessImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequiredResourceAccessFromDiscriminatorValue(parseNode: ParseNode | undefined) : RequiredResourceAccessImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RequiredResourceAccessImpl();
}
