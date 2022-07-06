import {VppLicensingType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVppLicensingTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : VppLicensingType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VppLicensingType();
}
