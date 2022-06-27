import {ExternalSponsorsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalSponsorsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalSponsorsImpl();
}
