import {ExternalSponsors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalSponsorsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalSponsors {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalSponsors();
}
