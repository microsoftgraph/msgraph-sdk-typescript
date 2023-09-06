import { deserializeIntoVppLicensingType } from './deserializeIntoVppLicensingType';
import { type VppLicensingType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVppLicensingTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVppLicensingType;
}
