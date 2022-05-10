import {PublicErrorDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPublicErrorDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : PublicErrorDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PublicErrorDetailImpl();
}
