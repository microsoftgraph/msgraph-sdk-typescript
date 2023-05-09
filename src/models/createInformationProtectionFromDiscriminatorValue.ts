import {deserializeIntoInformationProtection} from './deserializeIntoInformationProtection';
import {InformationProtection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoInformationProtection;
}
