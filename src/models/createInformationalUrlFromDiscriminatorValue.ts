import {InformationalUrlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationalUrlFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationalUrlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationalUrlImpl();
}
