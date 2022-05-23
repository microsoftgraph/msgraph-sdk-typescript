import {SpaApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSpaApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SpaApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SpaApplicationImpl();
}
