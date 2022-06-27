import {InternalSponsorsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : InternalSponsorsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InternalSponsorsImpl();
}
