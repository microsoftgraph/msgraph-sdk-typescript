import {InformationProtectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationProtectionImpl();
}
