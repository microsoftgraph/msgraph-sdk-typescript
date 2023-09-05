import { deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse } from './deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse';
import { type AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse;
}
